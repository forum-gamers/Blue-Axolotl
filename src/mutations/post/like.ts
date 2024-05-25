import { gql } from "@apollo/client";

export const CREATELIKE = gql`
  mutation CreateLike($postId: String!) {
    createLike(postId: $postId) {
      _id
      createdAt
      postId
      updatedAt
      userId
    }
  }
`;

export const DELETELIKE = gql`
  mutation DeleteLike($postId: String!) {
    deleteLike(postId: $postId)
  }
`;
