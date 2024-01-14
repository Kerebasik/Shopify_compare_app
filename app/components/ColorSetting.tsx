import {ColorPicker, InlineStack, Popover, TextField} from "@shopify/polaris";
import {useCallback, useEffect, useMemo, useState} from "react";
import chroma from "chroma-js";

type ColorSettingProps = {
    title: string
    initialColor?: string,
    onChange?: (color: string) => void
}

const ColorSetting = ({
                          title, initialColor = "#fff", onChange = () => {
    }
                      }: ColorSettingProps) => {
    const [valueBackColor, setValueBackColor] = useState<string>(initialColor)
    const [hexColor, setHexColor] = useState<string>()

    const [showColorPicker, setShowColorPicker] = useState<boolean>(false)
    const [color, setColor] = useState<{
        hue: number,
        brightness: number
        saturation: number
    }>({
        hue: 120,
        brightness: 1,
        saturation: 1,
    });

    const colorBack = useMemo(() => {
        return chroma.hsv(color.hue, color.saturation, color.brightness).hex()
    }, [color])

    useEffect(() => {
        setValueBackColor(colorBack)
    }, [colorBack]);

    const togglePopoverActive = useCallback(
        () => setShowColorPicker((popoverActive) => !popoverActive),
        [],
    );


    const isValidHexColor = (value: string) => {
        if (value === "") {
            return true; // Allow empty value
        }
        const hexColorRegex = /^#([0-9a-fA-F]{6})$/;
        return hexColorRegex.test(value);
    };

    useEffect(() => {
        if (isValidHexColor(valueBackColor)) {
            setHexColor(valueBackColor);
        }
    }, [valueBackColor]);

    const handleChangeBackColor = useCallback(
        (newValue: string) => setValueBackColor(newValue),
        []
    );

    useEffect(() => {
        setValueBackColor(initialColor)
    }, [initialColor]);

    useEffect(() => {
        const timer = setTimeout(() => {
            onChange(hexColor)
        }, 2000);

        return () => clearTimeout(timer);
    }, [hexColor]);

    const activator = <div style={{
        backgroundColor: valueBackColor,
        border: "1.5px solid",
        borderColor: "rgba(138, 138, 138, 1)",
        width: "45px",
        height: "45px",
        borderRadius: "25px",
        cursor: "pointer"
    }} onClick={togglePopoverActive}
    >
    </div>

    return (
        <>
            <InlineStack align={"space-between"} blockAlign={"center"}>
                <TextField
                    label={title}
                    value={valueBackColor}
                    onChange={handleChangeBackColor}
                    error={!isValidHexColor(valueBackColor)}
                    autoComplete="off"
                />

                <Popover
                    active={showColorPicker}
                    activator={activator}
                    autofocusTarget="first-node"
                    onClose={togglePopoverActive}
                >
                    <ColorPicker onChange={setColor} color={color}/>
                </Popover>
            </InlineStack>
        </>
    )
}

export {ColorSetting}