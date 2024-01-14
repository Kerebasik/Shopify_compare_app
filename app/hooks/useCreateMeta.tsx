import { useSubmit } from "@remix-run/react";
import { SelectPayload } from "@shopify/app-bridge/actions/ResourcePicker";
import { useCallback, useEffect, useState } from "react";

export const useCreateMeta = (
  id: string,
  meta: {
    node: { namespace: string; key: string; value: string; id: string };
  }[]
) => {
  const submit = useSubmit();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerPayload, setPickerPayload] = useState([]);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [loadingMeta, setLoadingMeta] = useState(false);
  const pattern: string = "^[a-zA-Z]+(_[a-zA-Z]+)*$";

  useEffect(() => {
    setLoadingMeta(false);
  }, [meta]);

  const handleSubmit = useCallback(() => {
    if (pickerPayload.length && key && value) {
      setLoadingMeta(true);
      const metaData = meta.find((item) => item.node.key === key);
      let parsedValue = [];
      if (metaData) {
        parsedValue = JSON.parse(metaData.node.value);
      }
      const updatedValue = parsedValue.map((item) => {
        if (item.productId === pickerPayload[0].id) {
          return { productId: item.productId, value };
        }
        return item;
      });
      if (JSON.stringify(updatedValue) === JSON.stringify(parsedValue)) {
        updatedValue.push({ productId: pickerPayload[0].id, value });
      }
      submit(
        {
          key,
          value: JSON.stringify([...updatedValue]),
          id,
          namespace: "product_meta",
          type: "json",
        },
        { replace: true, method: "POST" }
      );
      setKey("");
      setValue("");
      setPickerPayload([]);
    }
    return;
  }, [key, value, pickerPayload]);

  const handlePicker = useCallback((selectPayload: SelectPayload) => {
    setIsPickerOpen(false);
    setPickerPayload(selectPayload.selection);
  }, []);

  const handleKeyChange = useCallback((value: string) => {
    setKey(value);
  }, []);
  const handleValueChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  return {
    key,
    value,
    isPickerOpen,
    pickerPayload,
    loadingMeta,
    pattern,
    setIsPickerOpen,
    handleSubmit,
    handlePicker,
    handleKeyChange,
    handleValueChange,
  };
};
