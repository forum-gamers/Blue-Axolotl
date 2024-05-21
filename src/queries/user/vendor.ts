import { gql } from "@apollo/client";

export const MYVENDORACCOUNT = gql`
  query Query {
    findMyVendorAccount {
      backgroundImageId
      backgroundImageUrl
      createdAt
      description
      id
      imageId
      imageUrl
      name
      updatedAt
      userId
    }
  }
`;
