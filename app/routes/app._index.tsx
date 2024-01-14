import { useEffect, useMemo } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Page,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  Banner,
  Modal,
  TextField,
  Divider,
  Frame,
} from "@shopify/polaris";
import { authenticate } from "~/shopify.server";
import { useActionData, useLoaderData, useSubmit } from "@remix-run/react";
import { useToggle } from "~/hooks/useToggle";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { DescriptionInput, FeatureNameInput } from "~/constants/validation";
import { RequestFeatureFormInput } from "~/types/props";
import { createApp } from "@shopify/app-bridge";
import { Redirect } from "@shopify/app-bridge/actions";
import { GET_CURRENT_APP_ID } from "~/graphql/query";
import { JSON_INITIAL_ITEMS } from "~/helpers/initialItems";
import { redirectEditorLink } from "~/helpers/linkBuilder";
import { getCompareMeta } from "~/helpers/getCompareMeta";
import { addAndDelMetafield } from "~/helpers/addAndDelMetafield";
import { DraggableItems } from "~/components/DraggableItem/DraggableItems";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { admin, session } = await authenticate.admin(request);
  const themes = await admin.rest.resources.Theme.all({
    session: session,
  });
  const currentTheme = themes.data.find((item) => item.role === "main");
  const appId = await admin.graphql(GET_CURRENT_APP_ID);
  const id = await appId.json();
  const shopName = session.shop.split(".")[0];

  const response = await admin.rest.resources.Asset.all({
    session: session,
    theme_id: currentTheme!.id,
    asset: { key: "config/settings_data.json" },
  });

  const { meta, defaultMeta } = await getCompareMeta(
    admin,
    id.data.currentAppInstallation.id
  );

  const data = JSON.parse(String(response.data[0].value));
  const themeId = process.env.SHOPIFY_THEME_EXTENSION_ID;
  return json({
    data,
    currentTheme,
    shopName,
    themeId,
    id,
    meta,
    defaultMeta,
  });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();

  await addAndDelMetafield(admin, formData, request);
  const { meta, defaultMeta } = await getCompareMeta(admin, formData.get("id"));

  return json({
    meta,
    defaultMeta,
  });
};

export default function Index() {
  const loaderData: any = useLoaderData();
  const actionData: any = useActionData();
  const submit = useSubmit();
  const app = createApp(shopify.config);
  const redirect = Redirect.create(app);
  const [value, toggle] = useToggle(false);
  const { handleSubmit, control, reset, watch } =
    useForm<RequestFeatureFormInput>({
      defaultValues: {
        feature: "",
        description: "",
      },
    });

  useEffect(() => {
    if (loaderData.defaultMeta.length) {
      return;
    }
    submit(
      {
        key: "product_comparison",
        value: JSON_INITIAL_ITEMS,
        id: loaderData.id.data.currentAppInstallation.id,
        namespace: "default_product_meta",
        type: "json",
      },
      { replace: true, method: "POST" }
    );
  }, [submit]);

  const showAlert = useMemo(() => {
    if (loaderData?.data?.current?.blocks) {
      return loaderData?.data?.current?.blocks["2396933968462544605"]
        ?.disabled;
    }
    return true;
  }, [loaderData]);

  const handleActivateClick = () => {
    redirect.dispatch(
      Redirect.Action.REMOTE,
      redirectEditorLink(loaderData.shopName, loaderData.themeId)
    );
  };

  const handleSubmitFeedbackForm: SubmitHandler<
    RequestFeatureFormInput
  > = () => {
    const featureName = watch("feature");
    const description = watch("description");
    new Promise((resolve) => {
      resolve({ featureName, description });
    }).finally(() => {
      reset();
      toggle();
    });
  };

  return (
    <Frame>
      <Page>
        <BlockStack gap="400">
          <Text variant={"headingXl"} as={"h1"}>
            Dashboard
          </Text>
          {showAlert && (
            <Banner title="Active our app on your theme">
              <BlockStack gap="200">
                <Text as={"p"}>
                  Our application is still disabled in your theme. It is
                  required to be enabled to start storefront integration.
                </Text>

                <Box>
                  <Button onClick={handleActivateClick} variant={"primary"}>
                    Activate App
                  </Button>
                </Box>
              </BlockStack>
            </Banner>
          )}

          <Card>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text as={"p"}>
                We hope our App will be suitable for your business😊
                <br />
                If you want to customize the app to better suit your business,
                submit a request and we'll consider making it happen!
              </Text>
              <Button onClick={toggle}>Request a feature</Button>
            </div>
            <Modal open={value} onClose={toggle} title="Request new feature">
              <Modal.Section>
                <form onSubmit={handleSubmit(handleSubmitFeedbackForm)}>
                  <BlockStack gap={"200"}>
                    <Controller
                      name={"feature"}
                      control={control}
                      rules={FeatureNameInput}
                      render={({ field, fieldState }) => {
                        return (
                          <TextField
                            label={"Feature Name"}
                            autoComplete="off"
                            value={field.value}
                            error={fieldState.error?.message}
                            onChange={field.onChange}
                            placeholder={"e.g. Translate store front texts"}
                          />
                        );
                      }}
                    />

                    <Controller
                      name={"description"}
                      control={control}
                      rules={DescriptionInput}
                      render={({ field, fieldState }) => {
                        return (
                          <TextField
                            label={"Description"}
                            onChange={field.onChange}
                            value={field.value}
                            error={fieldState.error?.message}
                            placeholder={"Explain more about your feature"}
                            multiline={5}
                            autoComplete="off"
                          />
                        );
                      }}
                    />
                    <Divider borderColor="border" />
                    <div style={{ textAlign: "right" }}>
                      <Button variant={"primary"} submit>
                        Send
                      </Button>
                    </div>
                  </BlockStack>
                </form>
              </Modal.Section>
            </Modal>
          </Card>
          <Text variant={"headingLg"} as={"h2"}>
            Comparison Fields Setting
          </Text>
          <Card>
            {Boolean(loaderData.defaultMeta.length) && (
              <DraggableItems
                appId={loaderData.id.data.currentAppInstallation.id}
                meta={actionData ? actionData?.meta : loaderData.meta}
                defaultMeta={
                  actionData ? actionData?.defaultMeta : loaderData.defaultMeta
                }
              />
            )}
          </Card>
        </BlockStack>
      </Page>
    </Frame>
  );
}
