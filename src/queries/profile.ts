import { gql } from "@apollo/client";

export const userProfileQuery = gql`
  query Query {
    me {
      id
      fullname
      username
      email
      isVerified
      bio
      imageUrl
      imageId
      backgroundImageUrl
      backgroundImageId
      status
      createdAt
      updatedAt
    }
  }
`;
