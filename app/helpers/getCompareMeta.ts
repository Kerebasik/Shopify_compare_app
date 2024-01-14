import { GET_APP_METAFIELDS } from "~/graphql/query";

export const getCompareMeta = async (admin, id) => {
  const metafields = await admin.graphql(GET_APP_METAFIELDS, {
    variables: {
      ownerId: id,
      namespace: "product_meta",
    },
  });

  const defaultMetafields = await admin.graphql(GET_APP_METAFIELDS, {
    variables: {
      ownerId: id,
      namespace: "default_product_meta",
    },
  });

  const metafieldsJSON = await metafields.json();
  const defaultMetafieldsJSON = await defaultMetafields.json();

  return {
    meta: metafieldsJSON.data.appInstallation.metafields.edges,
    defaultMeta: defaultMetafieldsJSON.data.appInstallation.metafields.edges,
  };
};
