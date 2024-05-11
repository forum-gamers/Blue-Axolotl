"use server";

import { getAccessToken, Mutate } from "@/actions";
import { createPostMutation } from "@/mutations/post";
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
    mutation: createPostMutation,
    variables: {
      args: {
        text,
        files,
        allowComment: true,
        privacy: "public",
      },
    },
    context: {
      headers: {
        access_token,
      },
    },
  });
  if (!data && errors?.length) {
    console.log(errors[0].message);
  }
  if (errors) return errors;
  // console.log(newPost);
  return data;
};
