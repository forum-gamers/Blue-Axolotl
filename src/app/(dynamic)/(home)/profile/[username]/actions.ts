"use server";

import { getContext, Query } from "@/actions";
import type { PostResponse } from "@/interfaces/post";
import { USERPOSTQUERIES, USERPOSTWITHMEDIASQUERY } from "@/queries/post";

export const getUserPosts = async () => {
  return await Query<{ getMyPost: PostResponse[] }>({
    query: USERPOSTQUERIES,
    context: await getContext(),
  });
};

export const getUserPostsWithMedia = async () => {
  return await Query<{ getMyPost: PostResponse[] }>({
    query: USERPOSTWITHMEDIASQUERY,
    context: await getContext(),
  });
};
