import { Dispatch, SetStateAction } from "react";

export interface IModalProps {
  appId: string;
  meta: {
    node: { namespace: string; key: string; value: string; id: string };
  }[];
  setItems: Dispatch<
    SetStateAction<{ id: string; content: string; description: string }[]>
  >;
}

export interface IModalFormProps {
  id: string;
  meta: {
    node: { namespace: string; key: string; value: string; id: string };
  }[];
  setCheckedItems: Dispatch<SetStateAction<{}>>;
  checkedItems: {};
}
