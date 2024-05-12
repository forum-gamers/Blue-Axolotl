import { gql } from "@apollo/client";

export const userPostsQuery = gql`
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
        id
        fullname
        username
        email
        isVerified
        bio
        imageUrl
        imageId
        backgroundImageUrl
        backgroundImageId
        status
        createdAt
        updatedAt
      }
    }
  }
`;
