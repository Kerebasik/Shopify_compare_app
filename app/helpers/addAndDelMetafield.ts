import { DEL_METAFIELD } from "~/graphql/mutation";
import { addProductMeta } from "./addProductMeta";

export const addAndDelMetafield = async (admin, formData, request) => {
  if (formData.get("action") === "del") {
    await admin.graphql(DEL_METAFIELD, {
      variables: {
        input: {
          id: formData.get("metaId"),
        },
      },
    });
  } else {
    await addProductMeta(request, formData);
  }
};
