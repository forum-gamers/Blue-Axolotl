"use server";

import { redirect, RedirectType } from "next/navigation";
import { Mutate } from ".";
import { LOGINMUTATION, REGISTERMUTATION } from "@/mutations/user/user";

export const actionLogin = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, errors } = await Mutate({
    mutation: LOGINMUTATION,
    variables: {
      payload: {
        email,
        password,
        as: "Professional",
      },
    },
  });

  if (!data && errors?.length) {
    let errorMessage = errors[0].message.split("\n")[0];
    return redirect(`/login?error=${errorMessage}`, RedirectType.push);
  }
  const { login: token } = data as { login: string };
  return redirect(`/login?token=${token}`, RedirectType.replace);
};

export const registerAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullname = formData.get("fullname") as string;
  const username = formData.get("username") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const role = formData.get("role") as string;

  const { data, errors } = await Mutate({
    mutation: REGISTERMUTATION,
    variables: {
      payload: {
        email,
        password,
        confirmPassword,
        fullname,
        username,
        role,
      },
    },
  });
  if (!data && errors?.length) {
    let errorMessage = errors[0].message.split("\n")[0];
    return redirect(`/register?error=${errorMessage}`);
  }

  return redirect(`/login`);
};
