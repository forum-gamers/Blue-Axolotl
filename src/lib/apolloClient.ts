import {
  ApolloClient,
  InMemoryCache,
  type NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";
import { useMemo } from "react";
const uri = "http://localhost:8080";

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  // <- pake yg ini aja
  uri,
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
