import { gql } from "@apollo/client";

export const loginMutaion = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const registerMutation = gql`
  mutation Register($payload: RegisterInput!) {
    register(payload: $payload) {
      fullname
    }
  }
`;
