import { gql } from "@apollo/client";

export const MYBOOKMARK = gql`
  query FindMyBookmark($args: PaginationWithPostId!) {
    findMyBookmark(args: $args) {
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
