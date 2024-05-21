import { gql } from "@apollo/client";

export const CREATEVENDOR = gql`
  mutation Mutation($args: CreateVendorInput!) {
    createVendor(args: $args) {
      backgroundImageId
      backgroundImageUrl
      createdAt
      description
      id
      imageId
      name
      imageUrl
      updatedAt
      userId
    }
  }
`;

export const UPDATEVENDORIMAGE = gql`
  mutation Mutation($args: FileInput!) {
    updateVendorImg(args: $args) {
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

export const UPDATEVENDORBACKGROUND = gql`
  mutation Mutation($args: FileInput!) {
    updateVendorBg(args: $args) {
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

export const UPDATEVENDORDESCRIPTION = gql`
  mutation Mutation($desc: String!) {
    updateVendorDesc(desc: $desc) {
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
