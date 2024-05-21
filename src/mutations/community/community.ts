import { gql } from "@apollo/client";

export const CREATECOMMUNITY = gql`
  mutation CreateCommunity($args: CreateCommunityInput!) {
    createCommunity(args: $args) {
      backgroundId
      backgroundUrl
      createdAt
      description
      id
      imageId
      imageUrl
      name
      owner
      updatedAt
    }
  }
`;

export const DELETECOMMUNITY = gql`
  mutation DeleteCommunity($communityId: String!) {
    deleteCommunity(communityId: $communityId)
  }
`;

export const UPDATECOMMUNITYIMG = gql`
  mutation UpdateImg($communityId: String!, $file: FileInput!) {
    updateImg(communityId: $communityId, file: $file) {
      backgroundId
      backgroundUrl
      createdAt
      description
      id
      imageUrl
      imageId
      name
      owner
      updatedAt
    }
  }
`;

export const UPDATECOMMUNITYBACKGROUND = gql`
  mutation UpdateBackground($communityId: String!, $file: FileInput!) {
    updateBackground(communityId: $communityId, file: $file) {
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

export const UPDATECOMMUNITYDESC = gql`
  mutation UpdateDesc($communityId: String!, $text: String!) {
    updateDesc(communityId: $communityId, text: $text) {
      backgroundId
      backgroundUrl
      createdAt
      description
      id
      imageId
      imageUrl
      name
      owner
      updatedAt
    }
  }
`;

export const TRANSFETCOMMUNITYOWNERSHIP = gql`
  mutation ChangeOwnership($communityId: String!, $targetId: String!) {
    changeOwnership(communityId: $communityId, targetId: $targetId) {
      backgroundId
      backgroundUrl
      createdAt
      id
      description
      imageId
      imageUrl
      name
      owner
      updatedAt
    }
  }
`;
