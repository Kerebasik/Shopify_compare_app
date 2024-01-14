import {BlockStack, Box, ContextualSaveBar, Divider, Frame, InlineStack, Page, Text} from "@shopify/polaris";
import {ColorSetting} from "~/components/ColorSetting";
import {useEffect, useMemo, useState} from "react";
import {authenticate} from "~/shopify.server";
import {ActionFunctionArgs, json, LoaderFunctionArgs} from "@remix-run/node";
import {GET_APP_METAFIELDS, GET_CURRENT_APP_ID} from "~/graphql/query";
import {Metafields} from "~/constants/namespaces";
import {defaultStylesForTable} from "~/constants/defaults";
import {arrayToObjectMetafield, deepEqualObject} from "~/services/converter";
import {useLoaderData, useSubmit} from "@remix-run/react";
import {SET_METAFIELDS} from "~/graphql/mutation";
import {PreviewTable} from "~/components/PreviewTable/PreviewTable";
import {MetafieldsType} from "~/constants/types";
import {MetafieldsTableKeys} from "~/constants/keys";

type loaderData = {
    table: {
        backColor: string,
        textColor: string,
        attributesBackColor: string,
        attributesTextColor: string,
        attributesGroupTextColor: string
        attributesGroupBackColor: string,
        topbarBackColor: string,
        topbarTextColor: string
    }
}

type FormDataInput = {
    table: {
        backColor: string,
        textColor: string,
        attributesBackColor: string,
        attributesTextColor: string,
        attributesGroupTextColor: string
        attributesGroupBackColor: string,
        topbarBackColor: string,
        topbarTextColor: string
    }
}

export const loader = async ({request}: LoaderFunctionArgs) => {
    const {admin} = await authenticate.admin(request)

    const appId = await admin.graphql(GET_CURRENT_APP_ID)

    const appIdJson = await appId.json()

    const id = appIdJson.data.currentAppInstallation.id

    const metafields = await admin.graphql(GET_APP_METAFIELDS, {
        variables: {
            ownerId: id,
            namespace: Metafields.Table
        }
    })

    const metafieldsJSON = await metafields.json()

    const arrayMetafields = metafieldsJSON.data.appInstallation.metafields.edges

    let table: object

    if (arrayMetafields.length === 0) {
        table = defaultStylesForTable
    } else {
        table = arrayToObjectMetafield(arrayMetafields)
    }

    return json({
        table
    })
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
                        namespace: Metafields.Table,
                        type: MetafieldsType.Color,
                        key: MetafieldsTableKeys.BackColor,
                        value: String(dataFormData.table.backColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Table,
                        type: MetafieldsType.Color,
                        key: MetafieldsTableKeys.TextColor,
                        value: String(dataFormData.table.textColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Table,
                        type: MetafieldsType.Color,
                        key: MetafieldsTableKeys.AttributesBackColor,
                        value: String(dataFormData.table.attributesBackColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Table,
                        type: MetafieldsType.Color,
                        key: MetafieldsTableKeys.AttributesTextColor,
                        value: String(dataFormData.table.attributesTextColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Table,
                        type: MetafieldsType.Color,
                        key: MetafieldsTableKeys.AttributesGroupTextColor,
                        value: String(dataFormData.table.attributesGroupTextColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Table,
                        type: MetafieldsType.Color,
                        key: MetafieldsTableKeys.AttributesGroupBackColor,
                        value: String(dataFormData.table.attributesGroupBackColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Table,
                        type: MetafieldsType.Color,
                        key: MetafieldsTableKeys.TopbarBackColor,
                        value: String(dataFormData.table.topbarBackColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Table,
                        type: MetafieldsType.Color,
                        key: MetafieldsTableKeys.TopbarTextColor,
                        value: String(dataFormData.table.topbarTextColor),
                        ownerId: id
                    }
                ]
            }
        }
    )

    return null
}


export default function ComparisonTableSettings() {
    const {table}: loaderData = useLoaderData()
    const submit = useSubmit()

    const [backColor, setBackColor] = useState<string>(table.backColor)
    const [textColor, setTextColor] = useState<string>(table.textColor)
    const [attributesBackColor, setAttributesBackColor] = useState<string>(table.attributesBackColor)
    const [attributesTextColor, setAttributesTextColor] = useState<string>(table.attributesTextColor)
    const [attributesGroupTextColor, setAttributesGroupTextColor] = useState<string>(table.attributesGroupTextColor)
    const [attributesGroupBackColor, setAttributesGroupBackColor] = useState<string>(table.attributesGroupBackColor)
    const [topbarBackColor, setTopbarBackColor] = useState<string>(table.topbarBackColor)
    const [topbarTextColor, setTopbarTextColor] = useState<string>(table.topbarTextColor)

    const [actualData, setActualData] = useState<boolean>(true)
    const [loadedData, setLoadedData] = useState<boolean>(false)

    const handleBackColorOnChange = (color: string) => {
        setBackColor(color)
    }

    const handleTextColorOnChange = (color: string) => {
        setTextColor(color)
    }

    const handleAttributesGroupBackColorOnChange = (color: string) => {
        setAttributesGroupBackColor(color)
    }

    const handleAttributesGroupTextColorOnChange = (color: string) => {
        setAttributesGroupTextColor(color)
    }

    const handleAttributesTextColorOnChange = (color: string) => {
        setAttributesTextColor(color)
    }

    const handleAttributesBackColorOnChange = (color: string) => {
        setAttributesBackColor(color)
    }

    const handleTopbarBackColor = (color: string) => {
        setTopbarBackColor(color)
    }

    const handleTopbarTextColor = (color: string) => {
        setTopbarTextColor(color)
    }

    const handleDiscardActionOnClick = () => {
        setBackColor(table.backColor)
        setTextColor(table.textColor)
        setAttributesBackColor(table.attributesBackColor)
        setAttributesTextColor(table.attributesTextColor)
        setAttributesGroupTextColor(table.attributesGroupTextColor)
        setAttributesGroupBackColor(table.attributesGroupBackColor)
        setTopbarBackColor(table.topbarBackColor)
        setTopbarTextColor(table.topbarTextColor)
    }

    const currentDataInClientObject = useMemo(() => {
        return {
            backColor: backColor,
            textColor: textColor,
            attributesBackColor: attributesBackColor,
            attributesTextColor: attributesTextColor,
            attributesGroupTextColor: attributesGroupTextColor,
            attributesGroupBackColor: attributesGroupBackColor,
            topbarBackColor: topbarBackColor,
            topbarTextColor: topbarTextColor
        }
    }, [backColor, textColor, attributesBackColor, attributesTextColor, attributesGroupTextColor, attributesGroupBackColor, topbarBackColor, topbarTextColor])


    useEffect(() => {
        setActualData(deepEqualObject(currentDataInClientObject, table))
        setLoadedData(false)
    }, [table, currentDataInClientObject]);

    const handleSaveOnClick = () => {
        const data = JSON.stringify({
            table: {
                backColor: backColor,
                textColor: textColor,
                attributesBackColor: attributesBackColor,
                attributesTextColor: attributesTextColor,
                attributesGroupTextColor: attributesGroupTextColor,
                attributesGroupBackColor: attributesGroupBackColor,
                topbarBackColor: topbarBackColor,
                topbarTextColor: topbarTextColor
            }
        })

        submit({data}, {method: "POST"})
        setLoadedData(true)
        return
    }

    return (
        <Frame>
            <InlineStack gap="200" wrap={false}>
                <Box background={"bg-fill"}
                     width={"400px"}
                     borderColor={"border"}
                     minHeight={"100vh"}
                     borderWidth={"050"}
                >
                    <Page>
                        <BlockStack gap={"200"}>
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

                            <Text as={"p"} variant={"headingMd"}>Table Style</Text>
                            <Divider borderColor={"border"}/>

                            <ColorSetting title={"Background Color"}
                                          initialColor={backColor}
                                          onChange={handleBackColorOnChange}
                            />
                            <ColorSetting title={"Text Color"}
                                          onChange={handleTextColorOnChange}
                                          initialColor={textColor}
                            />
                            <ColorSetting title={"Attributes Background Color"}
                                          initialColor={attributesBackColor}
                                          onChange={handleAttributesBackColorOnChange}
                            />
                            <ColorSetting title={"Attributes Text Color"}
                                          initialColor={attributesTextColor}
                                          onChange={handleAttributesTextColorOnChange}
                            />
                            <ColorSetting title={"Attributes Group Background Color"}
                                          initialColor={attributesGroupBackColor}
                                          onChange={handleAttributesGroupBackColorOnChange}
                            />
                            <ColorSetting title={"Attributes Group Text Color"}
                                          initialColor={attributesGroupTextColor}
                                          onChange={handleAttributesGroupTextColorOnChange}
                            />
                            <Divider borderColor={"border"}/>

                            <Text as={"p"} variant={"headingSm"}>Topbar Action Style</Text>

                            <ColorSetting title={"Background Color"}
                                          initialColor={topbarBackColor}
                                          onChange={handleTopbarBackColor}
                            />
                            <ColorSetting title={"Text Color"}
                                          initialColor={topbarTextColor}
                                          onChange={handleTopbarTextColor}
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
                        <PreviewTable backColor={backColor}
                                      textColor={textColor}
                                      attributesGroupBackColor={attributesGroupBackColor}
                                      attributesGroupTextColor={attributesGroupTextColor}
                                      attributesBackColor={attributesBackColor}
                                      attributesTextColor={attributesTextColor}
                                      topbarBackColor={topbarBackColor}
                                      topbarTextColor={topbarTextColor}
                        />
                    </div>
                </Box>
            </InlineStack>
        </Frame>
    )
}