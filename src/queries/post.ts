import { gql } from "@apollo/client";

export const USERPOSTQUERIES = gql`
  query Query {
    getMyPost {
      _id
      userId
      text
      allowComment
      createdAt
      updatedAt
      countLike
      countShare
      isLiked
      isShared
      tags
      privacy
      totalData
      user {
        fullname
        imageUrl
        imageId
      }
      media {
        id
      }
    }
  }
`;

export const USERPOSTWITHMEDIASQUERY = gql`
  query Query {
    getMyPost {
      _id
      userId
      text
      allowComment
      createdAt
      updatedAt
      countLike
      countShare
      isLiked
      isShared
      tags
      privacy
      totalData
      media {
        id
        type
        url
      }
      user {
        fullname
        imageUrl
        imageId
      }
    }
  }
`;
