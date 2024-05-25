import { gql } from "@apollo/client";

export const FINDCOMMUNITYBYID = gql`
  query Query($communityId: String!) {
    findById(communityId: $communityId) {
      backgroundId
      backgroundUrl
      createdAt
      description
      id
      imageId
      name
      imageUrl
      owner
      updatedAt
    }
  }
`;
