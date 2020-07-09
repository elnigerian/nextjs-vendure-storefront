import gql from 'graphql-tag';

export const Collections = gql`
query Collections($options: CollectionListOptions) {
  collections(options: $options) {
    totalItems
    items {
      id
      name
      slug
      parent {
        id
        name
        slug
        assets {
          id
          name
          type
          mimeType
          fileSize
        }
      }
      children {
        id
        name
        slug
      }
      productVariants {
        totalItems
        items {
          id
          name
          sku
          price
          priceWithTax
          taxCategory {
            id
            name
          }
          taxRateApplied {
            id
            name
            enabled
          }
        }
      }
    }
  }
}
`;

export const CollectionsWithParents = gql`
query CollectionsWithParents($options: CollectionListOptions) {
  collections(options: $options) {
    totalItems
    items {
      id
      name
      slug
      parent {
        id
        name
        slug
        assets {
          id
          name
          type
          mimeType
          fileSize
        }
      }
    }
  }
}
`;

export const GetTopSellers = gql`
query GetTopSellers {
  search(input: { take: 8, groupByProduct: true, sort: { price: ASC } }) {
    items {
      productId
      slug
      productAsset {
        id
        preview
      }
      priceWithTax {
        ... on PriceRange {
          min
          max
        }
      }
      productName
    }
  }
}
`;
