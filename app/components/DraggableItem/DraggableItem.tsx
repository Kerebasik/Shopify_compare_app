import { useCallback, useEffect, useRef, useState } from "react";
import {
  DragBox,
  DragCheckboxContainer,
  DragItem,
} from "./DraggableItem.styled";
import { Checkbox, Icon, Text } from "@shopify/polaris";
import { CheckboxDelBtn } from "../MetafieldModalForm/MetafieldModalForm.styled";
import { DragHandleMinor, DeleteMajor } from "@shopify/polaris-icons";

export const DraggableItem = ({ provided, items, setItems, item }) => {
  const isInitialRenderOne = useRef(true);
  const [checkedItems, setCheckedItems] = useState(
    items.reduce((acc, item) => {
      acc[item.id] = item.active;
      return acc;
    }, {})
  );

  useEffect(() => {
    if (isInitialRenderOne.current) {
      isInitialRenderOne.current = false;
      return;
    }
    setItems((prevState) => {
      return prevState.map((item) => {
        for (const key in checkedItems) {
          if (Object.prototype.hasOwnProperty.call(checkedItems, key)) {
            const element = checkedItems[key];
            if (item.id === key) {
              return { ...item, active: element };
            }
          }
        }
      });
    });
  }, [checkedItems]);

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

  const handleDelBtn = useCallback(
    (e) => {
      const filteredItems = items.filter(
        (item) => item.id !== e.currentTarget.id
      );
      setItems(filteredItems);
    },
    [items]
  );

  return (
    <DragItem ref={provided.innerRef} {...provided.draggableProps}>
      <DragBox checked={checkedItems[item.id]}>
        <DragCheckboxContainer
          onClick={(e) => {
            const target = e.target as HTMLDivElement;
            if (target.nodeName !== "INPUT") {
              handleChange(item.id);
            }
          }}
        >
          <Checkbox
            label=""
            checked={checkedItems[item.id]}
            onChange={() => handleChange(item.id)}
          />
          <div>
            <Text variant="bodyMd" fontWeight="regular" as="h3">
              {item.content}
            </Text>
            <Text variant="bodyMd" fontWeight="regular" as="h3">
              {item.description}
            </Text>
          </div>
        </DragCheckboxContainer>
        {Boolean(item.key) && (
          <CheckboxDelBtn id={item.id} type="button" onClick={handleDelBtn}>
            <Icon source={DeleteMajor} tone="base" />
          </CheckboxDelBtn>
        )}

        <div {...provided.dragHandleProps}>
          <Icon source={DragHandleMinor} tone="base" />
        </div>
      </DragBox>
    </DragItem>
  );
};
