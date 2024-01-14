import { Button, Modal } from "@shopify/polaris";
import { useState, useCallback, FC, useEffect } from "react";
import { MetaForm } from "../MetafieldModalForm/MetafieldModalForm";
import { IModalProps } from "~/interfaces/interfaces";
import { ModalContainer } from "./MetafieldModal.styled";

export const MetafieldModal: FC<IModalProps> = ({ appId, meta, setItems }) => {
  const [active, setActive] = useState(false);
  const [isAddBtnDisabled, setIsAddBtnDisabled] = useState(false);
  const [newMetaItems, setNewMetaItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState(
    meta.reduce((acc, item) => {
      acc[item.node.key] = false;
      return acc;
    }, {})
  );

  useEffect(() => {
    const newMetaItems = meta.reduce((acc, item) => {
      for (const key in checkedItems) {
        if (Object.prototype.hasOwnProperty.call(checkedItems, key)) {
          if (item.node.key === key && checkedItems[key]) {
            const newMetaObj = {
              id: item.node.id,
              content: item.node.key
                .split("_")
                .filter((item) => item !== "_")
                .join(" "),
              description: "Product Metafield",
              key: item.node.key,
              active: false,
            };
            acc.push(newMetaObj);
          }
        }
      }
      return acc;
    }, []);

    if (!newMetaItems.length) {
      setIsAddBtnDisabled(true);
    } else {
      setIsAddBtnDisabled(false);
    }
    setNewMetaItems(newMetaItems);
  }, [checkedItems]);

  const handleChange = useCallback(() => {
    setActive(!active);
  }, [active]);

  const handleAddFieldAction = useCallback(() => {
    setItems((prevState) => [
      ...prevState,
      ...newMetaItems.filter(
        (el) => !prevState.find((item) => item.id === el.id)
      ),
    ]);
    setCheckedItems({});
    setActive(!active);
  }, [active, newMetaItems]);

  return (
    <ModalContainer>
      <Button onClick={handleChange}>Add Metafields</Button>
      <Modal
        open={active}
        onClose={handleChange}
        title="New Metafield"
        primaryAction={{
          content: "Add Field",
          onAction: handleAddFieldAction,
          disabled: isAddBtnDisabled,
        }}
      >
        <Modal.Section>
          <MetaForm
            id={appId}
            meta={meta}
            setCheckedItems={setCheckedItems}
            checkedItems={checkedItems}
          />
        </Modal.Section>
      </Modal>
    </ModalContainer>
  );
};
