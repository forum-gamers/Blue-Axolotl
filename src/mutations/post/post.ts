import { gql } from "@apollo/client";

export const CREATEPOST = gql`
  mutation Mutation($args: CreatePostInput!) {
    createPost(args: $args) {
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
      userId
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

export const DELETEPOST = gql`
  mutation DeletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`;
