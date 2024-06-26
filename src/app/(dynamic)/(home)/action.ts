"use server";

import { getAccessToken, Mutate } from "@/actions";
import { CREATEPOSTMUTATION } from "@/mutations/post";
import type { ImageType } from "@/types";

export const uploadPost = async ({
  text,
  files,
}: {
  text: string;
  files: ImageType[];
}) => {
  const access_token = await getAccessToken();
  const { data, errors } = await Mutate({
    mutation: CREATEPOSTMUTATION,
    variables: {
      args: {
        text,
        files,
        allowComment: true,
        privacy: "Public",
      },
    },
    context: {
      headers: {
        access_token,
      },
    },
  });
  if (errors) return errors;
  return data;
};
