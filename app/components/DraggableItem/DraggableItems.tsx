import { useCallback, useEffect, useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ContextualSaveBar } from "@shopify/polaris";
import { DragList } from "./DraggableItem.styled";
import { MetafieldModal } from "../MetafieldModal/MetafieldModal";
import { useSubmit } from "@remix-run/react";
import { DraggableItem } from "./DraggableItem";

export const DraggableItems = ({ appId, meta, defaultMeta }) => {
  const isInitialRenderTwo = useRef(true);
  const submit = useSubmit();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(() => {
    return JSON.parse(defaultMeta[0]?.node.value);
  });
  const [itemsChange, setItemsChange] = useState(true);

  useEffect(() => {
    setItemsChange(false);
    setLoading(false);
    setItems(JSON.parse(defaultMeta[0].node.value));
  }, [defaultMeta]);

  useEffect(() => {
    if (isInitialRenderTwo.current) {
      isInitialRenderTwo.current = false;
      return;
    }
    if (defaultMeta[0].node.value === JSON.stringify(items)) {
      setItemsChange(false);
    } else {
      setItemsChange(true);
    }
  }, [items]);

  const handleDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;
      const updatedItems = Array.from(items);
      const [removed] = updatedItems.splice(result.source.index, 1);
      updatedItems.splice(result.destination.index, 0, removed);
      setItems(updatedItems);
    },
    [items]
  );

  const handleSaveNewMeta = useCallback(() => {
    setLoading(true);
    submit(
      {
        key: "product_comparison",
        value: JSON.stringify(items),
        id: appId,
        namespace: "default_product_meta",
        type: "json",
      },
      { replace: true, method: "POST" }
    );
  }, [loading, items]);

  const handleDiscardMeta = useCallback(() => {
    setItems(JSON.parse(defaultMeta[0].node.value));
    setItemsChange(false);
  }, [defaultMeta, itemsChange, items]);

  return (
    <>
      {itemsChange && (
        <ContextualSaveBar
          alignContentFlush
          message="Unsaved changes"
          saveAction={{
            onAction: handleSaveNewMeta,
            loading: loading,
          }}
          discardAction={{
            onAction: handleDiscardMeta,
          }}
        />
      )}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <DragList ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <DraggableItem
                      provided={provided}
                      items={items}
                      setItems={setItems}
                      item={item}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </DragList>
          )}
        </Droppable>
      </DragDropContext>
      <MetafieldModal appId={appId} meta={meta} setItems={setItems} />
    </>
  );
};
