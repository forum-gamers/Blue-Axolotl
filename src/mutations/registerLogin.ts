import { gql } from "@apollo/client";

export const LOGINMUTATION = gql`
  mutation Mutation($payload: LoginInput!) {
    login(payload: $payload)
  }
`;

export const REGISTERMUTATION = gql`
  mutation Register($payload: RegisterInput!) {
    register(payload: $payload) {
      fullname
    }
  }
`;
