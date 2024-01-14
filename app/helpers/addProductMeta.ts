import { SET_METAFIELDS } from "~/graphql/mutation";
import { authenticate } from "~/shopify.server";

export const addProductMeta = async (request: any, data: any) => {
  const { admin } = await authenticate.admin(request);
  const id = data.get("id");
  const namespace = data.get("namespace");
  const key = data.get("key");
  const value = data.get("value");
  const type = data.get("type");

  const response = await admin.graphql(SET_METAFIELDS, {
    variables: {
      metafields: [
        {
          namespace,
          key,
          type,
          value,
          ownerId: id,
        },
      ],
    },
  });

  return response;
};
