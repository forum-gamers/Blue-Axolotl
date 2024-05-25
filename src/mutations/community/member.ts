import { gql } from "@apollo/client";

export const JOINCOMMUNITY = gql`
  mutation Mutation($communityId: String!) {
    joinCommunity(communityId: $communityId)
  }
`;

export const LEAVECOMMUNITY = gql`
  mutation LeaveCommunity($communityId: String!) {
    leaveCommunity(communityId: $communityId)
  }
`;
