import { gql } from "@apollo/client";

export const GETUSERROOM = gql`
  query GetUserRoom($page: Int, $limit: Int, $type: String) {
    getUserRoom(page: $page, limit: $limit, type: $type) {
      Group {
        _id
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
        description
        image
        imageId
        name
        owner
        type
        users {
          addedAt
          role
          userId
        }
      }
      Private {
        _id
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
        description
        image
        imageId
        name
        owner
        type
        users {
          addedAt
          role
          userId
        }
      }
    }
  }
`;

export const GETROOMBYID = gql`
  query GetRoomById($roomId: String!) {
    getRoomById(roomId: $roomId) {
      _id
      description
      image
      imageId
      name
      owner
      type
      users {
        addedAt
        role
        userId
      }
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

export const GETROOMBYUSERID = gql`
  query GetRoomByUserId($userId: String!) {
    getRoomByUserId(userId: $userId) {
      _id
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
      description
      image
      imageId
      name
      owner
      type
      users {
        addedAt
        role
        userId
      }
    }
  }
`;
