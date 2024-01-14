const SET_METAFIELDS = `
    mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          id
          namespace
          key
        }
        userErrors {
          field
          message
        }
      }
}
`;

const DEL_METAFIELD = `
mutation metafieldDelete($input: MetafieldDeleteInput!) {
  metafieldDelete(input: $input) {
    deletedId
    userErrors {
      field
      message
    }
  }
}`;

export { SET_METAFIELDS, DEL_METAFIELD };
