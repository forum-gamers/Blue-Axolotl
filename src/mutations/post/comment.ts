import { gql } from "@apollo/client";

export const CREATECOMMENT = gql`
  mutation Mutation($args: CommentForm!) {
    createComment(args: $args) {
      _id
      createdAt
      postId
      reply {
        _id
        createdAt
        text
        updatedAt
        userId
      }
      text
      updatedAt
      userId
    }
  }
`;

export const DELETECOMMENT = gql`
  mutation DeleteComment($id: String!) {
    deleteComment(_id: $id)
  }
`;
