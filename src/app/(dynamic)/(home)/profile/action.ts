"use server";

import { Query } from "@/actions";
import type { CustomSession } from "@/interfaces";
import { userProfileQuery } from "@/queries/profile";
import { getServerSideProps } from "next/dist/build/templates/pages";

const getAccessToken = async () => {
  return (
    ((await getServerSideProps()) as CustomSession).user?.access_token || ""
  );
};

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
