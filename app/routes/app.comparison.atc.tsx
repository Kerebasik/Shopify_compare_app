import {
    BlockStack,
    Box, ContextualSaveBar,
    Divider, Frame,
    InlineStack,
    Page,
    Text,
} from "@shopify/polaris";
import {useEffect, useMemo, useState} from "react";
import {BooleanSetting} from "~/components/BooleanSetting";
import {ColorSetting} from "~/components/ColorSetting";
import {ActionFunctionArgs, json, LoaderFunctionArgs} from "@remix-run/node";
import {authenticate} from "~/shopify.server";
import {GET_APP_METAFIELDS, GET_CURRENT_APP_ID} from "~/graphql/query";
import {arrayToObjectMetafield, deepEqualObject} from "~/services/converter";
import {useLoaderData, useSubmit} from "@remix-run/react";
import {SET_METAFIELDS} from "~/graphql/mutation";
import {Metafields} from "~/constants/namespaces";
import {defaultStylesForProductDetailPageButton} from "~/constants/defaults";
import {
    PreviewProductDetailPageButton
} from "~/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton";
import {MetafieldsType} from "~/constants/types";
import {MetafieldsProductButtonKeys} from "~/constants/keys";


export const loader = async ({request}: LoaderFunctionArgs) => {
    const {admin} = await authenticate.admin(request)

    const appId = await admin.graphql(GET_CURRENT_APP_ID)

    const appIdJson = await appId.json()

    const id = appIdJson.data.currentAppInstallation.id

    const metafields = await admin.graphql(GET_APP_METAFIELDS, {
        variables: {
            ownerId: id,
            namespace: Metafields.ProductButton
        }
    })

    const metafieldsJSON = await metafields.json()

    const arrayMetafields = metafieldsJSON.data.appInstallation.metafields.edges

    let productButton: object

    if (arrayMetafields.length === 0) {
        productButton = defaultStylesForProductDetailPageButton
    } else {
        productButton = arrayToObjectMetafield(arrayMetafields)
    }

    return json({
        productButton
    })
}

type FormDataInput = {
    productButton: {
        show: boolean,
        showIcon: boolean
        showLabel: boolean,
        backColor: string,
        borderColor: string,
        addToCompareTextColor: string,
        removeFromCompareTextColor: string
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
                        namespace: Metafields.ProductButton,
                        type: MetafieldsType.Boolean,
                        key: MetafieldsProductButtonKeys.Show,
                        value: String(dataFormData.productButton.show),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductButton,
                        type: MetafieldsType.Boolean,
                        key: MetafieldsProductButtonKeys.ShowLabel,
                        value: String(dataFormData.productButton.showLabel),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductButton,
                        type: MetafieldsType.Boolean,
                        key: MetafieldsProductButtonKeys.ShowIcon,
                        value: String(dataFormData.productButton.showIcon),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductButton,
                        type: MetafieldsType.Color,
                        key: MetafieldsProductButtonKeys.BackColor,
                        value: String(dataFormData.productButton.backColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductButton,
                        type: MetafieldsType.Color,
                        key: MetafieldsProductButtonKeys.BorderColor,
                        value: String(dataFormData.productButton.borderColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductButton,
                        type: MetafieldsType.Color,
                        key: MetafieldsProductButtonKeys.AddToCompareTextColor,
                        value: String(dataFormData.productButton.addToCompareTextColor),
                        ownerId: id
                    },
                    {
                        namespace: Metafields.ProductButton,
                        type: MetafieldsType.Color,
                        key: MetafieldsProductButtonKeys.RemoveFromCompareTextColor,
                        value: String(dataFormData.productButton.removeFromCompareTextColor),
                        ownerId: id
                    }
                ]
            }
        }
    )

    return null
}

type LoaderData = {
    productButton: {
        show: string,
        showIcon: string
        showLabel: string,
        backColor: string,
        borderColor: string,
        addToCompareTextColor: string,
        removeFromCompareTextColor: string
    }
}

export default function ProductDetailSettings() {
    const submit = useSubmit()
    const {productButton}: LoaderData = useLoaderData()
    const [showCompareButton, setShowCompareButton] = useState<boolean>(productButton?.show === "true")
    const [showIcon, setShowIcon] = useState<boolean>(productButton?.showIcon === "true")
    const [showLabel, setShowLabel] = useState<boolean>(productButton?.showLabel === "true")
    const [backColor, setBackColor] = useState<string>(productButton?.backColor)
    const [borderColor, setBorderColor] = useState<string>(productButton?.borderColor)
    const [addToCompareTextColor, setAddToCompareTextColor] = useState<string>(productButton?.addToCompareTextColor)
    const [removeFromCompareTextColor, setRemoveFromCompareTextColor] = useState<string>(productButton?.removeFromCompareTextColor)
    const [actualData, setActualData] = useState<boolean>(true)
    const [loadedData, setLoadedData] = useState<boolean>(false)

    const handleShowCompareButtonOnChange = () => {
        setShowCompareButton(!showCompareButton)
    }

    const handleShowIconOnChange = () => {
        setShowIcon(!showIcon)
    }

    const handleShowLabelOnChange = () => {
        setShowLabel(!showLabel)
    }

    const handleBackColorOnChange = (color: string) => {
        setBackColor(color)
    }

    const handleAddToCompareTextColorOnChange = (color: string) => {
        setAddToCompareTextColor(color)
    }

    const handleBorderColorOnChange = (color: string) => {
        setBorderColor(color)
    }

    const handleRemoveFromCompareTextColorOnChange = (color: string) => {
        setRemoveFromCompareTextColor(color)
    }

    const handleSaveOnClick = () => {
        const data = JSON.stringify({
                productButton: {
                    show: showCompareButton,
                    showIcon: showIcon,
                    showLabel: showLabel,
                    backColor: backColor,
                    borderColor: borderColor,
                    addToCompareTextColor: addToCompareTextColor,
                    removeFromCompareTextColor: removeFromCompareTextColor
                }
            }
        )

        submit({data}, {method: "POST"})
        setLoadedData(true)
        return
    }

    const currentDataInClientObject = useMemo(() => {
        return {
            show: String(showCompareButton),
            showIcon: String(showIcon),
            showLabel: String(showLabel),
            backColor: backColor,
            borderColor: borderColor,
            addToCompareTextColor: addToCompareTextColor,
            removeFromCompareTextColor: removeFromCompareTextColor
        }
    }, [showCompareButton, showIcon, showLabel, backColor, borderColor, addToCompareTextColor, removeFromCompareTextColor])

    useEffect(() => {
        setActualData(deepEqualObject(currentDataInClientObject, productButton))
        setLoadedData(false)
    }, [productButton, currentDataInClientObject]);

    const handleDiscardActionOnClick = () => {
        setShowCompareButton(productButton?.show === "true")
        setShowIcon(productButton?.showIcon === "true")
        setShowLabel(productButton?.showLabel === "true")
        setBackColor(productButton?.backColor)
        setBorderColor(productButton?.borderColor)
        setAddToCompareTextColor(productButton?.addToCompareTextColor)
        setRemoveFromCompareTextColor(productButton?.removeFromCompareTextColor)
    }

    return (
        <Frame>
            <InlineStack gap="200" wrap={false}>
                <Box background={"bg-fill"}
                     width={"400px"}
                     borderColor={"border"}
                     minHeight={"100vh"}
                     borderWidth={"050"}
                     minWidth={"400px"}
                >
                    <Page fullWidth>
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

                            <Text as={"h4"} variant={"headingMd"}>Product Detail Page</Text>

                            <Divider borderColor={"border"}/>

                            <BooleanSetting title={"Show Add To Compare button"}
                                            value={showCompareButton}
                                            valueOnChange={handleShowCompareButtonOnChange}
                            />

                            <BooleanSetting title={"Show Icon"}
                                            value={showIcon}
                                            valueOnChange={handleShowIconOnChange}
                            />

                            <BooleanSetting title={"Show Label"}
                                            value={showLabel}
                                            valueOnChange={handleShowLabelOnChange}
                            />

                            <Divider borderColor={"border"}/>

                            <Text as={"p"} variant={"headingSm"}>Style</Text>

                            <ColorSetting title={"Background Color"}
                                          initialColor={backColor}
                                          onChange={handleBackColorOnChange}
                            />

                            <ColorSetting title={"Border Color"}
                                          initialColor={borderColor}
                                          onChange={handleBorderColorOnChange}
                            />

                            <ColorSetting title={"Add To Compare Text Color"}
                                          initialColor={addToCompareTextColor}
                                          onChange={handleAddToCompareTextColorOnChange}
                            />

                            <ColorSetting title={"Remove From Compare Text Color"}
                                          initialColor={removeFromCompareTextColor}
                                          onChange={handleRemoveFromCompareTextColorOnChange}
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
                        <PreviewProductDetailPageButton
                            showLabel={showLabel}
                            showIcon={showIcon}
                            backColor={backColor}
                            borderColor={borderColor}
                            addToCompareTextColor={addToCompareTextColor}
                            removeFromCompareTextColor={removeFromCompareTextColor}
                        />
                    </div>
                </Box>
            </InlineStack>
        </Frame>
    )
}
