import { Button, Form, FormLayout, Text, TextField } from "@shopify/polaris";
import { FC, useCallback } from "react";
import { useCreateMeta } from "~/hooks/useCreateMeta";
import { CheckboxList } from "./MetafieldModalForm.styled";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { MetafieldModalCheckbox } from "./MetafieldModalCheckbox";
import { IModalFormProps } from "~/interfaces/interfaces";
import { error } from "console";

export const MetaForm: FC<IModalFormProps> = ({
  id,
  meta,
  setCheckedItems,
  checkedItems,
}) => {
  const {
    key,
    value,
    isPickerOpen,
    pickerPayload,
    loadingMeta,
    pattern,
    setIsPickerOpen,
    handlePicker,
    handleSubmit,
    handleKeyChange,
    handleValueChange,
  } = useCreateMeta(id, meta);

  const onPickerBtnClick = useCallback(() => {
    setIsPickerOpen(true);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <CheckboxList>
          {meta.map((item, idx) => {
            return (
              <MetafieldModalCheckbox
                key={idx}
                id={id}
                idx={idx}
                item={item}
                setCheckedItems={setCheckedItems}
                checkedItems={checkedItems}
              />
            );
          })}
        </CheckboxList>
        <ResourcePicker
          resourceType="Product"
          open={isPickerOpen}
          onSelection={handlePicker}
          selectMultiple={false}
          onCancel={() => {
            setIsPickerOpen(false);
          }}
        />
        <Button fullWidth onClick={onPickerBtnClick}>
          Select a product
        </Button>
        <Text variant="headingMd" as="h3">
          {pickerPayload.length ? pickerPayload[0].title : ""}
        </Text>
        <TextField
          pattern={pattern}
          value={key}
          onChange={handleKeyChange}
          label="Key"
          type="text"
          autoComplete="text"
          requiredIndicator={false}
          helpText={
            <span>
              The key of the metafield to use in extension. Example text format
              "Example_text"
            </span>
          }
        />
        <TextField
          value={value}
          onChange={handleValueChange}
          label="Value"
          type="text"
          autoComplete="text"
          helpText={
            <span>The value of the metafield to use in extension.</span>
          }
        />
        <Button submit loading={loadingMeta}>
          Save meta
        </Button>
      </FormLayout>
    </Form>
  );
};
