"use server";

import { getAccessToken, Query } from "@/actions";
import { userProfileQuery } from "@/queries/profile";

export const getUserProfile = async (username: string) => {
  return username;
};

export const getProfile = async () => {
  const access_token = await getAccessToken();
  return Query({
    query: userProfileQuery,
    context: {
      headers: {
        access_token,
      },
    },
  });
};
