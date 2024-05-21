"use server";

import { Query } from "@/actions";
import type { CustomSession } from "@/interfaces";
import { ME } from "@/queries/user/user";
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
    query: ME,
    context: {
      headers: {
        access_token,
      },
    },
  });
};
