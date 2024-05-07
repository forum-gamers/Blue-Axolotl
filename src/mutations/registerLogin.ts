import { gql } from "@apollo/client";

export const loginMutaion = gql`
  mutation Mutation($payload: LoginInput!) {
    login(payload: $payload)
  }
`;

export const registerMutation = gql`
  mutation Register($payload: RegisterInput!) {
    register(payload: $payload) {
      fullname
    }
  }
`;
