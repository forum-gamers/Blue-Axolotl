"use client";

import type { ChildrenProps } from "@/interfaces";
import { client } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function ApolloClientProvider({ children }: ChildrenProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
