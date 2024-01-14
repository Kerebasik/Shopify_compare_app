import {BlockStack, Box, ContextualSaveBar, Divider, Frame, InlineStack, Page, Text} from "@shopify/polaris";
import {BooleanSetting} from "~/components/BooleanSetting";
import {useEffect, useMemo, useState} from "react";
import {ColorSetting} from "~/components/ColorSetting";
import {arrayToObjectMetafield, deepEqualObject} from "~/services/converter";
import {authenticate} from "~/shopify.server";
import {ActionFunctionArgs, json, LoaderFunctionArgs} from "@remix-run/node";
import {GET_APP_METAFIELDS, GET_CURRENT_APP_ID} from "~/graphql/query";
import {Metafields} from "~/constants/namespaces";
import {useLoaderData, useSubmit} from "@remix-run/react";
import {SET_METAFIELDS} from "~/graphql/mutation";
import {defaultStylesForToolbar} from "~/constants/defaults";
import {PreviewToolbar} from "~/components/PreviewToolbar/PreviewToolbar";
import {MetafieldsType} from "~/constants/types";
import {MetafieldsToolbarKeys} from "~/constants/keys";


type loaderData = {
    toolbar: {
        showToolbar: string
        showToolbarAfterClickOnProductPage: string
        backgroundColor: string
        textColor: string
        viewCompareButtonBackColor: string
        viewCompareButtonTextColor: string
        closeButtonBackColor: string
        closeButtonTextColor: string
        cleanUpButtonBackColor: string
        cleanUpButtonTextColor: string
    }
}

type FormDataInput = {
    toolbar: {
        showToolbar: boolean
        showToolbarAfterClickOnProductPage: boolean
        backgroundColor: string
        textColor: string
        viewCompareButtonBackColor: string
        viewCompareButtonTextColor: string
        closeButtonBackColor: string
        closeButtonTextColor: string
        cleanUpButtonBackColor: string
        cleanUpButtonTextColor: string
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
            namespace: Metafields.Toolbar
        }
    })

    const metafieldsJSON = await metafields.json()

    const arrayMetafields = metafieldsJSON.data.appInstallation.metafields.edges

    let toolbar: object

    if (arrayMetafields.length === 0) {
        toolbar = defaultStylesForToolbar
    } else {
        toolbar = arrayToObjectMetafield(arrayMetafields)
    }

    return json({
        toolbar,
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
                        namespace: Metafields.Toolbar,
                        type: MetafieldsType.Boolean,
                        key: MetafieldsToolbarKeys.ShowToolbar,
                        value: String(dataFormData.toolbar.showToolbar),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Toolbar,
                        type: MetafieldsType.Boolean,
                        key: MetafieldsToolbarKeys.ShowToolbarAfterClickOnProductPage,
                        value: String(dataFormData.toolbar.showToolbarAfterClickOnProductPage),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Toolbar,
                        type: MetafieldsType.Color,
                        key: MetafieldsToolbarKeys.BackgroundColor,
                        value: String(dataFormData.toolbar.backgroundColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Toolbar,
                        type: MetafieldsType.Color,
                        key: MetafieldsToolbarKeys.TextColor,
                        value: String(dataFormData.toolbar.textColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Toolbar,
                        type: MetafieldsType.Color,
                        key: MetafieldsToolbarKeys.ViewCompareButtonBackColor,
                        value: String(dataFormData.toolbar.viewCompareButtonBackColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Toolbar,
                        type: MetafieldsType.Color,
                        key: MetafieldsToolbarKeys.ViewCompareButtonTextColor,
                        value: String(dataFormData.toolbar.viewCompareButtonTextColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Toolbar,
                        type: MetafieldsType.Color,
                        key: MetafieldsToolbarKeys.CloseButtonBackColor,
                        value: String(dataFormData.toolbar.closeButtonBackColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Toolbar,
                        type: MetafieldsType.Color,
                        key: MetafieldsToolbarKeys.CloseButtonTextColor,
                        value: String(dataFormData.toolbar.closeButtonTextColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Toolbar,
                        type: MetafieldsType.Color,
                        key: MetafieldsToolbarKeys.CleanUpButtonBackColor,
                        value: String(dataFormData.toolbar.cleanUpButtonBackColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.Toolbar,
                        type: MetafieldsType.Color,
                        key: MetafieldsToolbarKeys.CleanUpButtonTextColor,
                        value: String(dataFormData.toolbar.cleanUpButtonTextColor),
                        ownerId: id
                    }
                ]
            }
        }
    )

    return null
}


export default function ToolbarSettings() {
    const {toolbar}: loaderData = useLoaderData()
    const submit = useSubmit()
    const [showToolbar, setShowToolbar] = useState<boolean>(toolbar.showToolbar === "true")
    const [showToolbarAfterClickOnProductPage, setShowToolbarAfterClickOnProductPage] = useState<boolean>(toolbar.showToolbarAfterClickOnProductPage === "true")
    const [backgroundColor, setBackgroundColor] = useState<string>(toolbar.backgroundColor)
    const [textColor, setTextColor] = useState<string>(toolbar.textColor)
    const [viewCompareButtonBackColor, setViewCompareButtonBackColor] = useState<string>(toolbar.viewCompareButtonBackColor)
    const [viewCompareButtonTextColor, setViewCompareButtonTextColor] = useState<string>(toolbar.viewCompareButtonTextColor)
    const [closeButtonBackColor, setCloseButtonBackColor] = useState<string>(toolbar.closeButtonBackColor)
    const [closeButtonTextColor, setCloseButtonTextColor] = useState<string>(toolbar.closeButtonTextColor)
    const [cleanUpButtonBackColor, setCleanUpButtonBackColor] = useState<string>(toolbar.cleanUpButtonBackColor)
    const [cleanUpButtonTextColor, setCleanUpButtonTextColor] = useState<string>(toolbar.cleanUpButtonTextColor)

    const [actualData, setActualData] = useState<boolean>(true)
    const [loadedData, setLoadedData] = useState<boolean>(false)

    const handleShowToolbarOnChange = () => {
        setShowToolbar(!showToolbar)
    }

    const handleShowToolbarAfterOnChange = () => {
        setShowToolbarAfterClickOnProductPage(!showToolbarAfterClickOnProductPage)
    }

    const handleBackgroundColorOnChange = (color: string) => {
        setBackgroundColor(color)
    }

    const handleViewCompareButtonBackColorOnChange = (color: string) => {
        setViewCompareButtonBackColor(color)
    }

    const handleTextColorOnChange = (color: string) => {
        setTextColor(color)
    }

    const handleViewCompareButtonTextColorOnChange = (color: string) => {
        setViewCompareButtonTextColor(color)
    }

    const handleCloseButtonBackColorOnChange = (color: string) => {
        setCloseButtonBackColor(color)
    }

    const handleCloseButtonTextColorOnChange = (color: string) => {
        setCloseButtonTextColor(color)
    }

    const handleCleanUpButtonBackColorOnChange = (color: string) => {
        setCleanUpButtonBackColor(color)
    }

    const handleCleanUpButtonTextColorOnChange = (color: string) => {
        setCleanUpButtonTextColor(color)
    }

    const handleSaveOnClick = () => {
        const data = JSON.stringify({
                toolbar: {
                    showToolbar: showToolbar,
                    showToolbarAfterClickOnProductPage: showToolbarAfterClickOnProductPage,
                    backgroundColor: backgroundColor,
                    textColor: textColor,
                    viewCompareButtonBackColor: viewCompareButtonBackColor,
                    viewCompareButtonTextColor: viewCompareButtonTextColor,
                    closeButtonBackColor: closeButtonBackColor,
                    closeButtonTextColor: closeButtonTextColor,
                    cleanUpButtonBackColor: cleanUpButtonBackColor,
                    cleanUpButtonTextColor: cleanUpButtonTextColor
                }
            }
        )

        submit({data}, {method: "POST"})
        setLoadedData(true)
        return
    }

    const handleDiscardActionOnClick = () => {
        setShowToolbar(toolbar.showToolbar === "true")
        setShowToolbarAfterClickOnProductPage(toolbar.showToolbarAfterClickOnProductPage === "true")
        setBackgroundColor(toolbar.backgroundColor)
        setTextColor(toolbar.textColor)
        setViewCompareButtonBackColor(toolbar.viewCompareButtonBackColor)
        setViewCompareButtonTextColor(toolbar.viewCompareButtonTextColor)
        setCloseButtonBackColor(toolbar.closeButtonBackColor)
        setCloseButtonTextColor(toolbar.closeButtonTextColor)
        setCleanUpButtonBackColor(toolbar.cleanUpButtonBackColor)
        setCleanUpButtonTextColor(toolbar.cleanUpButtonTextColor)
    }

    const currentDataInClientObject = useMemo(() => {
        return {
            showToolbar: String(showToolbar),
            showToolbarAfterClickOnProductPage: String(showToolbarAfterClickOnProductPage),
            backgroundColor: backgroundColor,
            textColor: textColor,
            viewCompareButtonBackColor: viewCompareButtonBackColor,
            viewCompareButtonTextColor: viewCompareButtonTextColor,
            closeButtonBackColor: closeButtonBackColor,
            closeButtonTextColor: closeButtonTextColor,
            cleanUpButtonBackColor: cleanUpButtonBackColor,
            cleanUpButtonTextColor: cleanUpButtonTextColor
        }
    }, [showToolbar, showToolbarAfterClickOnProductPage, backgroundColor, textColor, viewCompareButtonBackColor, viewCompareButtonTextColor, closeButtonBackColor, closeButtonTextColor, cleanUpButtonBackColor, cleanUpButtonTextColor])


    useEffect(() => {
        setActualData(deepEqualObject(currentDataInClientObject, toolbar))
        setLoadedData(false)
    }, [toolbar, currentDataInClientObject]);

    return (
        <Frame>
            <InlineStack gap="200" wrap={false}>
                <Box background={"bg-fill"}
                     width={"400px"}
                     borderColor={"border"}
                     borderWidth={"050"}
                     minHeight={"150vh"}
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

                            <Text as={"p"} variant={"headingMd"}>Comparison Toolbar</Text>
                            <Divider borderColor={"border"}/>
                            <Text as={"p"} variant={"headingSm"}>Toolbar</Text>
                            <BooleanSetting value={showToolbar} valueOnChange={handleShowToolbarOnChange}
                                            title={"Show toolbar after click fixed button"}/>
                            <BooleanSetting title={"Show toolbar after product added to compare"}
                                            valueOnChange={handleShowToolbarAfterOnChange}
                                            value={showToolbarAfterClickOnProductPage}/>

                            <ColorSetting title={"Background Color"}
                                          initialColor={backgroundColor}
                                          onChange={handleBackgroundColorOnChange}
                            />

                            <ColorSetting title={"Text Color"}
                                          initialColor={textColor}
                                          onChange={handleTextColorOnChange}
                            />

                            <Divider borderColor={"border"}/>

                            <Text as={"p"} variant={"headingSm"}>View Compare Button</Text>
                            <ColorSetting title={"Background Color"}
                                          initialColor={viewCompareButtonBackColor}
                                          onChange={handleViewCompareButtonBackColorOnChange}
                            />
                            <ColorSetting title={"Text Color"}
                                          initialColor={viewCompareButtonTextColor}
                                          onChange={handleViewCompareButtonTextColorOnChange}
                            />
                            <Divider borderColor={"border"}/>
                            <Text as={"p"} variant={"headingSm"}>Close Button</Text>
                            <ColorSetting title={"Background Color"}
                                          initialColor={closeButtonBackColor}
                                          onChange={handleCloseButtonBackColorOnChange}
                            />
                            <ColorSetting title={"Text Color"}
                                          initialColor={closeButtonTextColor}
                                          onChange={handleCloseButtonTextColorOnChange}

                            />
                            <Divider borderColor={"border"}/>
                            <Text as={"p"} variant={"headingSm"}>Clean up Button</Text>
                            <ColorSetting title={"Background Color"}
                                          initialColor={cleanUpButtonBackColor}
                                          onChange={handleCleanUpButtonBackColorOnChange}
                            />
                            <ColorSetting title={"Text Color"}
                                          initialColor={cleanUpButtonTextColor}
                                          onChange={handleCleanUpButtonTextColorOnChange}
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
                        <PreviewToolbar
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            viewCompareButtonTextColor={viewCompareButtonTextColor}
                            viewCompareButtonBackColor={viewCompareButtonBackColor}
                            cleanUpButtonTextColor={cleanUpButtonTextColor}
                            cleanUpButtonBackColor={cleanUpButtonBackColor}
                            closeButtonTextColor={closeButtonTextColor}
                            closeButtonBackColor={closeButtonBackColor}
                        />
                    </div>
                </Box>
            </InlineStack>
        </Frame>
    )
}