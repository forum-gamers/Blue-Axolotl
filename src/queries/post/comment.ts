import { gql } from "@apollo/client";

export const GETPOSTCOMMENT = gql`
  query Query($args: PaginationWithPostId!) {
    findPostComment(args: $args) {
      _id
      createdAt
      postId
      text
      updatedAt
      userId
      reply {
        _id
        createdAt
        text
        updatedAt
        userId
      }
    }
  }
`;
