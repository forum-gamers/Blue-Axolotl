import { gql } from "@apollo/client";

export const MYWALLET = gql`
  query Query {
    findMyWallet {
      balance
      coin
      createdAt
      id
      updatedAt
      userId
    }
  }
`;
