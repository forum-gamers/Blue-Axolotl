import { gql } from "@apollo/client";

export const CREATEREPLY = gql`
  mutation CreateReply($args: CommentForm!) {
    createReply(args: $args) {
      _id
      createdAt
      text
      updatedAt
      userId
    }
  }
`;

export const DELETEREPLY = gql`
  mutation DeleteReply($args: DeleteReplyPayload!) {
    deleteReply(args: $args)
  }
`;
