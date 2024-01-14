import { useCallback, useEffect, useState } from "react";
import { CheckboxContainer, CheckboxDelBtn } from "./MetafieldModalForm.styled";
import { Checkbox, Icon, Spinner } from "@shopify/polaris";
import { useSubmit } from "@remix-run/react";
import { DeleteMajor } from "@shopify/polaris-icons";

export const MetafieldModalCheckbox = ({
  idx,
  item,
  checkedItems,
  setCheckedItems,
  id,
}) => {
  const submit = useSubmit();
  const [loading, setLoading] = useState(false);
  const [btnId, setBtnId] = useState("");

  useEffect(() => {
    setLoading(false);
  }, [item]);

  const handleChange = useCallback(
    (itemId) => {
      setCheckedItems((prevCheckedItems) => {
        const updatedCheckedItems = {
          ...prevCheckedItems,
          [itemId]: !prevCheckedItems[itemId],
        };
        return updatedCheckedItems;
      });
    },
    [checkedItems]
  );

  const handleDelBtn = useCallback((e) => {
    setLoading(true);
    setBtnId(e.currentTarget.id);
    submit(
      { action: "del", id, metaId: e.currentTarget.id },
      { replace: true, method: "POST" }
    );
  }, []);

  return (
    <CheckboxContainer>
      <Checkbox
        label={item.node.key}
        checked={checkedItems[item.node.key]}
        onChange={() => handleChange(item.node.key)}
      />
      <CheckboxDelBtn id={item.node.id} type="button" onClick={handleDelBtn}>
        {loading && btnId === item.node.id ? (
          <Spinner accessibilityLabel="Spinner example" size="small" />
        ) : (
          <Icon source={DeleteMajor} tone="base" />
        )}
      </CheckboxDelBtn>
    </CheckboxContainer>
  );
};
