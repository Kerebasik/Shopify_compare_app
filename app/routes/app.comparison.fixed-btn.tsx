import {
    BlockStack,
    Box,
    ContextualSaveBar,
    Divider, Frame,
    InlineStack,
    Page,
    Text
} from "@shopify/polaris";
import {BooleanSetting} from "~/components/BooleanSetting";
import {useEffect, useMemo, useState} from "react";
import {ColorSetting} from "~/components/ColorSetting";
import {ActionFunctionArgs, json, LoaderFunctionArgs} from "@remix-run/node";
import {authenticate} from "~/shopify.server";
import {GET_APP_METAFIELDS, GET_CURRENT_APP_ID} from "~/graphql/query";
import {useLoaderData, useSubmit} from "@remix-run/react";
import {SET_METAFIELDS} from "~/graphql/mutation";
import {arrayToObjectMetafield, deepEqualObject} from "~/services/converter";
import {Metafields} from "~/constants/namespaces";
import {defaultStylesForFixedButton} from "~/constants/defaults";
import {PreviewFixedCompareButton} from "~/components/PreviewFixedCompareButton/FixedCompareButton";
import {MetafieldsType} from "~/constants/types";
import {MetafieldsFixedButtonKeys} from "~/constants/keys";


export const loader = async ({request}: LoaderFunctionArgs) => {
    const {admin} = await authenticate.admin(request)

    const appId = await admin.graphql(GET_CURRENT_APP_ID)

    const appIdJson = await appId.json()

    const id = appIdJson.data.currentAppInstallation.id

    const metafields = await admin.graphql(GET_APP_METAFIELDS, {
        variables: {
            ownerId: id,
            namespace: Metafields.FixedButton
        }
    })

    const metafieldsJSON = await metafields.json()

    const arrayMetafields = metafieldsJSON.data.appInstallation.metafields.edges

    let fixedButton: object

    if (arrayMetafields.length === 0) {
        fixedButton = defaultStylesForFixedButton
    } else {
        fixedButton = arrayToObjectMetafield(arrayMetafields)
    }

    return json({
        fixedButton
    })
}

type FormDataInput = {
    fixedButton: {
        show: boolean,
        showLabel: boolean,
        backColor: string,
        textColor: string
    }
}

export const action = async ({request}: ActionFunctionArgs) => {
    const {admin} = await authenticate.admin(request)
    const formData = await request.formData()
    const objectFD = Object.fromEntries(formData);
    const dataFormData: FormDataInput = await JSON.parse(String(objectFD.data))

    const appId = await admin.graphql(GET_CURRENT_APP_ID)
    const appIdJson = await appId.json()
    const id = appIdJson.data.currentAppInstallation.id

    await admin.graphql(SET_METAFIELDS,
        {
            variables: {
                metafields: [
                    {
                        namespace: Metafields.FixedButton,
                        type: MetafieldsType.Boolean,
                        key: MetafieldsFixedButtonKeys.Show,
                        value: String(dataFormData.fixedButton.show),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.FixedButton,
                        type: MetafieldsType.Boolean,
                        key: MetafieldsFixedButtonKeys.ShowLabel,
                        value: String(dataFormData.fixedButton.showLabel),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.FixedButton,
                        type: MetafieldsType.Color,
                        key: MetafieldsFixedButtonKeys.BackColor,
                        value: String(dataFormData.fixedButton.backColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.FixedButton,
                        type: MetafieldsType.Color,
                        key: MetafieldsFixedButtonKeys.TextColor,
                        value: String(dataFormData.fixedButton.textColor),
                        ownerId: id
                    }
                ]
            }
        }
    )

    return null
}

type loaderData = {
    fixedButton: {
        show: string,
        backColor: string,
        showLabel: string,
        textColor: string,
    }
}

export default function StickyFixedButtonSettings() {
    const {fixedButton}: loaderData = useLoaderData()
    const submit = useSubmit()
    const [showStickyButton, setShowStickyButton] = useState<boolean>(fixedButton.show === "true")
    const [showLabel, setShowLabel] = useState<boolean>(fixedButton.showLabel === "true")
    const [backColor, setBackColor] = useState<string>(fixedButton.backColor)
    const [textColor, setTextColor] = useState<string>(fixedButton.textColor)
    const [actualData, setActualData] = useState<boolean>(true)
    const [loadedData, setLoadedData] = useState<boolean>(false)


    const handleShowStickyButtonOnChange = () => {
        setShowStickyButton(!showStickyButton)
    }

    const handleShowLabelOnChange = () => {
        setShowLabel(!showLabel)
    }


    const handleBackColorOnChange = (color: string) => {
        setBackColor(color)
    }

    const handleTextColorOnChange = (color: string) => {
        setTextColor(color)
    }

    const handleDiscardActionOnClick = () => {
        setShowStickyButton(fixedButton.show === "true")
        setShowLabel(fixedButton.showLabel === "true")
        setBackColor(fixedButton.backColor)
        setTextColor(fixedButton.textColor)
    }

    const currentDataInClientObject = useMemo(() => {
        return {
            show: String(showStickyButton),
            showLabel: String(showLabel),
            backColor: backColor,
            textColor: textColor
        }
    }, [showStickyButton, showLabel, backColor, textColor])

    useEffect(() => {
        setActualData(deepEqualObject(currentDataInClientObject, fixedButton))
        setLoadedData(false)
    }, [fixedButton, currentDataInClientObject]);


    const handleSaveOnClick = () => {
        const data = JSON.stringify({
            fixedButton: {
                show: showStickyButton,
                showLabel: showLabel,
                backColor: backColor,
                textColor: textColor
            }
        })

        submit({data}, {method: "POST"})
        setLoadedData(true)
        return
    }


    return (
        <>
            <Frame>
                <InlineStack gap="200" wrap={false}>
                    <Box background={"bg-fill"}
                         width={"400px"}
                         borderColor={"border"}
                         minHeight={"100vh"}
                         borderWidth={"050"}
                    >
                        <Page>
                            <BlockStack gap={"300"}>
                                {
                                    !actualData &&
                                    <>
                                        <ContextualSaveBar
                                            alignContentFlush
                                            message="Unsaved changes"
                                            saveAction={{
                                                onAction: handleSaveOnClick,
                                                loading: loadedData
                                            }}
                                            discardAction={{
                                                onAction: handleDiscardActionOnClick,
                                            }}
                                        />
                                    </>
                                }

                                <Text as={"h4"} variant={"headingMd"}>Sticky Fixed Button</Text>

                                <Divider borderColor={"border"}/>

                                <BooleanSetting title={"Show sticky fixed button"} value={showStickyButton}
                                                valueOnChange={handleShowStickyButtonOnChange}/>

                                <Divider borderColor={"border"}/>

                                <Text as={"h4"} variant={"headingSm"}>Sticky Fixed Button</Text>

                                <BooleanSetting title={"Show Label"} value={showLabel}
                                                valueOnChange={handleShowLabelOnChange}/>

                                <Divider borderColor={"border"}/>

                                <Text as={"h4"} variant={"headingSm"}>Style</Text>

                                <ColorSetting title={"Background Color"}
                                              initialColor={backColor}
                                              onChange={handleBackColorOnChange}
                                />

                                <ColorSetting title={"Text Color"}
                                              initialColor={textColor}
                                              onChange={handleTextColorOnChange}

                                />
                            </BlockStack>
                        </Page>
                    </Box>
                    <Box background={"bg-fill-tertiary-active"} minHeight={"100%"}>
                        <div style={{
                            width: "1000px",
                            height: "100%",
                            border: "1px solid black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <PreviewFixedCompareButton showLabel={showLabel} backColor={backColor}
                                                       textColor={textColor}/>
                        </div>
                    </Box>
                </InlineStack>
            </Frame>
        </>

    )
}