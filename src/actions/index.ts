"use server";

import { getServerSideSession } from "@/helper/session";
import type { CustomSession } from "@/interfaces";
import type { BaseMutate, BaseQuery } from "@/interfaces/action";
import { client } from "@/lib/apolloClient";
import type { ApolloQueryResult, FetchResult } from "@apollo/client";
import { headers } from "next/headers";

export const Mutate = async <T>({
  mutation,
  context,
  variables,
}: BaseMutate): Promise<FetchResult<T>> =>
  await client.mutate<T>({
    mutation,
    context,
    variables,
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

export const Query = async <T>({
  query,
  context,
  variables,
}: BaseQuery): Promise<ApolloQueryResult<T>> =>
  await client.query<T>({
    query,
    context,
    variables,
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });

export const getAccessToken = async () => {
  return ((await getServerSideSession()) as CustomSession).user?.access_token;
};

export const getContext = async () => {
  return {
    headers: {
      access_token: await getAccessToken(),
    },
  };
};
