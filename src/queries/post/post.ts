import { gql } from "@apollo/client";

export const GETPUBLICCONTENT = gql`
  query Query($args: getPostParams) {
    getPublicContent(args: $args) {
      _id
      allowComment
      countLike
      createdAt
      countShare
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      totalData
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
      userId
    }
  }
`;

export const GETMYPOST = gql`
  query Query($page: Int, $limit: Int) {
    getMyPost(page: $page, limit: $limit) {
      _id
      allowComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      totalData
      updatedAt
      userId
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

export const GETLIKEDPOST = gql`
  query GetLikedPost($page: Int, $limit: Int) {
    getLikedPost(page: $page, limit: $limit) {
      _id
      allowComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      totalData
      updatedAt
      userId
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

export const GETUSERMEDIA = gql`
  query GetUserMedia($page: Int, $limit: Int) {
    getUserMedia(page: $page, limit: $limit) {
      _id
      allowComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      totalData
      updatedAt
      userId
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

export const GETUSERPOSTBYID = gql`
  query GetUserPostById($args: GetPostParamsById!) {
    getUserPostById(args: $args) {
      _id
      allowComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      totalData
      updatedAt
      userId
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

export const GETUSERMEDIABYID = gql`
  query GetMediaByUserId($args: GetPostParamsById!) {
    getMediaByUserId(args: $args) {
      _id
      allowComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      totalData
      updatedAt
      userId
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

export const GETUSERLIKEPOST = gql`
  query GetUserLikedPost($args: GetPostParamsById!) {
    getUserLikedPost(args: $args) {
      _id
      allowComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      totalData
      updatedAt
      userId
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

export const GETPOSTBYID = gql`
  query GetPostById($getPostByIdId: String!) {
    getPostById(id: $getPostByIdId) {
      _id
      allowComment
      countLike
      countShare
      createdAt
      isLiked
      isShared
      media {
        id
        type
        url
      }
      privacy
      tags
      text
      totalData
      updatedAt
      userId
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
