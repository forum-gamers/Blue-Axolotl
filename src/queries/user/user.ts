import { gql } from "@apollo/client";

export const ME = gql`
  query Query {
    me {
      backgroundImageId
      backgroundImageUrl
      bio
      createdAt
      email
      fullname
      id
      imageId
      imageUrl
      isVerified
      status
      updatedAt
      username
    }
  }
`;

export const GETUSERBYID = gql`
  query GetById($getByIdId: String!) {
    getById(id: $getByIdId) {
      backgroundImageId
      backgroundImageUrl
      bio
      createdAt
      email
      fullname
      id
      imageId
      imageUrl
      isVerified
      status
      updatedAt
      username
    }
  }
`;
