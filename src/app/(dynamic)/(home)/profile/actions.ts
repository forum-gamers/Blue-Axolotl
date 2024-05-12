"use server";

import { getContext, Query } from "@/actions";
import { userPostsQuery } from "@/queries/post";
import { userProfileQuery } from "@/queries/profile";

export const getUserPosts = async () => {
  return await Query({
    query: userPostsQuery,
    context: await getContext(),
  });
};

export const getUserProfile = async () => {
  const context = await getContext();
  return await Query({
    query: userProfileQuery,
    context: await getContext(),
  });
};
