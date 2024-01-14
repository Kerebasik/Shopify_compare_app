import {
    BlockStack,
    Box,
    ContextualSaveBar,
    Divider,
    ExceptionList,
    Frame,
    InlineStack,
    Page,
    Text
} from "@shopify/polaris";
import {BooleanSetting} from "~/components/BooleanSetting";
import {NoteMinor} from "@shopify/polaris-icons";
import {useEffect, useMemo, useState} from "react";
import {ColorSetting} from "~/components/ColorSetting";
import {authenticate} from "~/shopify.server";
import {ActionFunctionArgs, json, LoaderFunctionArgs} from "@remix-run/node";
import {GET_APP_METAFIELDS, GET_CURRENT_APP_ID} from "~/graphql/query";
import {Metafields} from "~/constants/namespaces";
import {defaultStylesForProductsGridButton} from "~/constants/defaults";
import {arrayToObjectMetafield, deepEqualObject} from "~/services/converter";
import {useLoaderData, useSubmit} from "@remix-run/react";
import {SET_METAFIELDS} from "~/graphql/mutation";
import {MetafieldsType} from "~/constants/types";
import {MetafieldsProductsGridButtonKeys} from "~/constants/keys";

type FormDataInput = {
    productsGridButton: {
        showCompareButton: boolean,
        showIcon: boolean
        showLabel: boolean,
        backgroundColor: string,
        borderColor: string,
        addCompareButtonTextColor: string,
        removeCompareButtonTextColor: string
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
            namespace: Metafields.ProductsGridButton
        }
    })

    const metafieldsJSON = await metafields.json()

    const arrayMetafields = metafieldsJSON.data.appInstallation.metafields.edges

    let productsGridButton: object

    if (arrayMetafields.length === 0) {
        productsGridButton = defaultStylesForProductsGridButton
    } else {
        productsGridButton = arrayToObjectMetafield(arrayMetafields)
    }

    return json({
        productsGridButton
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
                        namespace: Metafields.ProductsGridButton,
                        type: MetafieldsType.Boolean,
                        key: MetafieldsProductsGridButtonKeys.ShowCompareButton,
                        value: String(dataFormData.productsGridButton.showCompareButton),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductsGridButton,
                        type: MetafieldsType.Boolean,
                        key: MetafieldsProductsGridButtonKeys.ShowIcon,
                        value: String(dataFormData.productsGridButton.showIcon),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductsGridButton,
                        type: MetafieldsType.Boolean,
                        key: MetafieldsProductsGridButtonKeys.ShowLabel,
                        value: String(dataFormData.productsGridButton.showLabel),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductsGridButton,
                        type: MetafieldsType.Color,
                        key: MetafieldsProductsGridButtonKeys.BackgroundColor,
                        value: String(dataFormData.productsGridButton.backgroundColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductsGridButton,
                        type: MetafieldsType.Color,
                        key: MetafieldsProductsGridButtonKeys.BorderColor,
                        value: String(dataFormData.productsGridButton.borderColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductsGridButton,
                        type: MetafieldsType.Color,
                        key: MetafieldsProductsGridButtonKeys.AddCompareButtonTextColor,
                        value: String(dataFormData.productsGridButton.addCompareButtonTextColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductsGridButton,
                        type: MetafieldsType.Color,
                        key: MetafieldsProductsGridButtonKeys.RemoveCompareButtonTextColor,
                        value: String(dataFormData.productsGridButton.removeCompareButtonTextColor),
                        ownerId: id
                    }
                ]
            }
        }
    )

    return null
}

type LoaderData = {
    productsGridButton: {
        showCompareButton: string,
        showIcon: string
        showLabel: string,
        backgroundColor: string,
        borderColor: string,
        addCompareButtonTextColor: string,
        removeCompareButtonTextColor: string
    }
}

export default function ProductGridPage() {
    const submit = useSubmit()

    const {productsGridButton}: LoaderData = useLoaderData()
    const [showCompareButton, setShowCompareButton] = useState<boolean>(productsGridButton.showCompareButton === "true")
    const [showIcon, setShowIcon] = useState<boolean>(productsGridButton.showIcon === "true")
    const [showLabel, setShowLabel] = useState<boolean>(productsGridButton.showLabel === "true")
    const [backgroundColor, setBackgroundColor] = useState<string>(productsGridButton.backgroundColor)
    const [borderColor, setBorderColor] = useState<string>(productsGridButton.borderColor)
    const [addCompareButtonTextColor, setAddCompareButtonTextColor] = useState<string>(productsGridButton.addCompareButtonTextColor)
    const [removeCompareButtonTextColor, setRemoveCompareButtonTextColor] = useState<string>(productsGridButton.removeCompareButtonTextColor)

    const [actualData, setActualData] = useState<boolean>(true)
    const [loadedData, setLoadedData] = useState<boolean>(false)

    const handleShowCompareButtonOnChange = () => {
        setShowCompareButton(!showCompareButton)
    }
    const handleShowLabelOnChange = () => {
        setShowLabel(!showLabel)
    }
    const handleShowIconOnChange = () => {
        setShowIcon(!showIcon)
    }

    const handleBackgroundColorOnChange = (color: string) => {
        setBackgroundColor(color)
    }

    const handleBorderColorOnChange = (color: string) => {
        setBorderColor(color)
    }

    const handleAddCompareButtonTextColorOnChange = (color: string) => {
        setAddCompareButtonTextColor(color)
    }

    const handleRemoveCompareButtonTextColorOnChange = (color: string) => {
        setRemoveCompareButtonTextColor(color)
    }

    const currentDataInClientObject = useMemo(() => {
        return {
            showCompareButton: String(showCompareButton),
            showIcon: String(showIcon),
            showLabel: String(showLabel),
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            addCompareButtonTextColor: addCompareButtonTextColor,
            removeCompareButtonTextColor: removeCompareButtonTextColor
        }
    }, [showCompareButton, showIcon, showLabel, backgroundColor, borderColor, addCompareButtonTextColor, removeCompareButtonTextColor])


    const handleSaveOnClick = () => {
        const data = JSON.stringify({
            productsGridButton: {
                showCompareButton: showCompareButton,
                showIcon: showCompareButton,
                showLabel: showCompareButton,
                backgroundColor: showCompareButton,
                borderColor: showCompareButton,
                addCompareButtonTextColor: showCompareButton,
                removeCompareButtonTextColor: showCompareButton
            }
        })
        submit({data}, {method: "POST"})
        setLoadedData(true)
        return
    }

    const handleDiscardActionOnClick = () => {
        setShowCompareButton(productsGridButton.showCompareButton === "true")
        setShowIcon(productsGridButton.showIcon === "true")
        setShowLabel(productsGridButton.showLabel === "true")
        setBackgroundColor(productsGridButton.backgroundColor)
        setBorderColor(productsGridButton.borderColor)
        setAddCompareButtonTextColor(productsGridButton.addCompareButtonTextColor)
        setRemoveCompareButtonTextColor(productsGridButton.removeCompareButtonTextColor)
    }

    useEffect(() => {
        setActualData(deepEqualObject(currentDataInClientObject, productsGridButton))
        setLoadedData(false)
    }, [productsGridButton, currentDataInClientObject]);

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

                            <Text as={"h4"} variant={"headingMd"}>Product Grid Page</Text>

                            <Divider borderColor={"border"}/>

                            <ExceptionList
                                items={[
                                    {
                                        icon: NoteMinor,
                                        description:
                                            'If our app does not work with your theme after turn on widget. Please chat with us to be integrated with your theme quickly.',
                                    },
                                ]}
                            />

                            <BooleanSetting title={"Show Add To Compare button"}
                                            valueOnChange={handleShowCompareButtonOnChange} value={showCompareButton}/>

                            <BooleanSetting title={"Show Icon"} value={showIcon}
                                            valueOnChange={handleShowIconOnChange}/>

                            <BooleanSetting title={"Show Label"} value={showLabel}
                                            valueOnChange={handleShowLabelOnChange}/>

                            <Divider borderColor={"border"}/>

                            <Text as={"h4"} variant={"headingSm"}>Style</Text>

                            <ColorSetting title={"Background Color"}
                                          initialColor={backgroundColor}
                                          onChange={handleBackgroundColorOnChange}
                            />

                            <ColorSetting title={"Border Color"}
                                          initialColor={borderColor}
                                          onChange={handleBorderColorOnChange}
                            />

                            <ColorSetting title={"Add To Compare Text Color"}
                                          initialColor={addCompareButtonTextColor}
                                          onChange={handleAddCompareButtonTextColorOnChange}
                            />

                            <ColorSetting title={"Remove From Compare Text Color"}
                                          initialColor={removeCompareButtonTextColor}
                                          onChange={handleRemoveCompareButtonTextColorOnChange}
                            />
                        </BlockStack>
                    </Page>
                </Box>
                <Box>
                    Iframe Our Button
                </Box>

            </InlineStack>
        </Frame>
    )
}