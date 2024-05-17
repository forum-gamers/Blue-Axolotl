import type { UserProfile } from "./profile";

export interface Message {
  message: string;
}

export interface PostForm {
  files: unknown;
  text: string;
  allowComment: boolean;
  privacy: string;
}

export interface PostIdPayload {
  _id: string;
}

export interface Media {
  id: string;
  type: string;
  url: string;
}

export interface Post {
  _id: string;
  userId: string;
  text: string;
  media: Media[];
  allowComment: boolean;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  privacy: string;
}

export interface Pagination {
  page: number;
  limit: number;
}

export interface PaginationWithUserId extends Pagination {
  userId: string;
}

export interface PostRespWithMetadata {
  totalData: number;
  limit: number;
  page: number;
  totalPage: number;
  data: PostResponse[];
}

export interface PostResponse {
  _id: string;
  userId: string;
  text: string;
  media?: Media[];
  allowComment: boolean;
  createdAt: string;
  updatedAt: string;
  countLike: number;
  countShare: number;
  isLiked: boolean;
  isShared: boolean;
  tags: string[];
  privacy: string;
  totalData: number;
  user: UserProfile;
}

export interface GetPostParams extends Pagination {
  tags: string[];
  userIds: string[];
}

export interface TopTag {
  _id: string;
  count: number;
  posts: string[];
}

export interface TopTagResp {
  datas: TopTag[];
}

export interface CreatePostInput {
  files: unknown;
  text: string;
  allowComment: boolean;
  privacy: string;
}

export interface ListIdsResp {
  datas: string[];
}
