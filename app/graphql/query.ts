const GET_CURRENT_APP_ID = `
    query {
        currentAppInstallation {
            id
        }
    }
`;

const GET_APP_METAFIELDS = `
    query AppInstallationMetafields($ownerId: ID!, $namespace:String!) {
      appInstallation(id: $ownerId) {
        metafields(first: 250, namespace:$namespace) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
    }
`;

const GET_ALL_APP_METAFIELDS = `
    query AppInstallationMetafields($ownerId: ID!) {
      appInstallation(id: $ownerId) {
        metafields(first: 10) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
    }
`;

const GET_ALL_PRODUCTS = `#graphql
  query {
    products(first: 250, reverse: true) {
      edges {
        node {
          id
          title
          handle
          resourcePublicationOnCurrentPublication {
            publication {
              name
              id
            }
            publishDate
            isPublished
          }
        }
      }
    }
  }`;

export {
  GET_CURRENT_APP_ID,
  GET_APP_METAFIELDS,
  GET_ALL_APP_METAFIELDS,
  GET_ALL_PRODUCTS,
};
