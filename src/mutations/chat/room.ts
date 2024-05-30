import { gql } from "@apollo/client";

export const CREATEROOM = gql`
  mutation Mutation($args: CreateRoomInput!) {
    createRoom(args: $args) {
      _id
      description
      image
      imageId
      name
      owner
      users {
        addedAt
        role
        userId
      }
      type
      chat {
        _id
        createdAt
        image
        imageId
        isRead
        mediaType
        message
        senderId
        status
        updatedAt
      }
    }
  }
`;
