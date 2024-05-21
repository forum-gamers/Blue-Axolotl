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

export const CHANGEUSERPROFILE = gql`
  mutation Mutation($payload: FileInput!) {
    changeProfile(payload: $payload)
  }
`;

export const CHANGEUSERBACKGROUND = gql`
  mutation ChangeBackground($payload: FileInput!) {
    changeBackground(payload: $payload)
  }
`;

export const CHANGEVERIFIED = gql`
  mutation ChangeBackground($token: String!) {
    changeVerified(token: $token)
  }
`;

export const RESENDEMAILVERIFICATION = gql`
  mutation ChangeBackground($email: String!) {
    resendEmailVerification(email: $email)
  }
`;
