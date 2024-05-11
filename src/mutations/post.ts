import { gql } from "@apollo/client";

export const createPostMutation = gql`
  mutation Mutation($args: CreatePostInput!) {
    createPost(args: $args) {
      _id
      allowComment
    }
  }
`;
