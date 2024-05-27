import { gql } from "@apollo/client";

export const CREATEPOSTMUTATION = gql`
  mutation Mutation($args: CreatePostInput!) {
    createPost(args: $args) {
      _id
      allowComment
    }
  }
`;
