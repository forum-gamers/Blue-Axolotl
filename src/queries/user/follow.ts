import { gql } from "@apollo/client";

export const GETMYFOLLOWING = gql`
  query GetMyFollowing($page: Int, $limit: Int) {
    getMyFollowing(page: $page, limit: $limit) {
      createdAt
      followerId
      followingId
      id
      updatedAt
      user {
        backgroundImageId
        backgroundImageUrl
        bio
        createdAt
        email
        fullname
        id
        imageId
        imageUrl
        isVerified
        status
        updatedAt
        username
      }
    }
  }
`;

export const GETMYFOLLOWER = gql`
  query GetMyFollower($page: Int, $limit: Int) {
    getMyFollower(page: $page, limit: $limit) {
      createdAt
      followerId
      followingId
      id
      updatedAt
      user {
        backgroundImageId
        backgroundImageUrl
        bio
        createdAt
        email
        fullname
        id
        imageId
        imageUrl
        isVerified
        status
        updatedAt
        username
      }
    }
  }
`;
