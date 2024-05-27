import {
  ApolloClient,
  InMemoryCache,
  type NormalizedCacheObject,
  HttpLink,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { useMemo } from "react";
import { getMainDefinition } from "@apollo/client/utilities";
const uri = process.env.GATEWAY_URL ?? "http://localhost:8080";

const wsLink = new GraphQLWsLink(
  createClient({
    url: uri,
  })
);

export const splitLink = () =>
  typeof window !== "undefined"
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        createIsoMorphLink()
      )
    : createIsoMorphLink();

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  // <- pake yg ini aja
  link: splitLink(),
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

function createIsoMorphLink() {
  return new HttpLink({
    uri,
    credentials: "same-origin",
  });
}

let apolloClient: any;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsoMorphLink(),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const client = useMemo(() => initializeApollo(initialState), [initialState]);
  return client;
}
