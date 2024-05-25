import { gql } from "@apollo/client";

export const CREATEBOOKMARK = gql`
  mutation CreateBookmark($postId: String!) {
    createBookmark(postId: $postId) {
      _id
      createdAt
      postId
      updatedAt
      userId
    }
  }
`;

export const DELETEBOOKMARK = gql`
  mutation DeleteBookmark($id: String!) {
    deleteBookmark(_id: $id)
  }
`;
