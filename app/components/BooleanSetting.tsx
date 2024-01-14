import {Box, Button, InlineStack, Text} from "@shopify/polaris";

type BooleanSettingProps = {
    title: string,
    value: boolean,
    valueOnChange: () => void
}

const BooleanSetting = ({title, value, valueOnChange}: BooleanSettingProps) => {
    return (
        <>
            <InlineStack align={"space-between"} blockAlign={"center"}>
                <Text as={"p"} variant={"bodySm"}>{title}</Text>
                <Box as={"span"} background={value ? "bg-surface-success" : "bg-fill-transparent-secondary"}
                     borderRadius={"150"} paddingInlineStart={"200"}
                     paddingInlineEnd={"200"}>{value ? "On" : "Off"}</Box>
                <Button onClick={valueOnChange}>Turn {value ? "Off" : "On"}</Button>
            </InlineStack>
        </>
    )
}

export {BooleanSetting}