"use server";

import { getContext, Query } from "@/actions";
import { USERPOSTQUERIES } from "@/queries/post";
import { USERPROFILEQUERY } from "@/queries/profile";

export const getUserPosts = async () => {
  return await Query({
    query: USERPOSTQUERIES,
    context: await getContext(),
  });
};

export const getUserProfile = async () => {
  return await Query({
    query: USERPROFILEQUERY,
    context: await getContext(),
  });
};
