import { gql } from "@apollo/client";

export const FOLLOWAUSER = gql`
  mutation Mutation($targetId: String!) {
    followUser(targetId: $targetId) {
      createdAt
      followerId
      followingId
      id
      updatedAt
    }
  }
`;
