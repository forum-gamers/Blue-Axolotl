import { gql } from "@apollo/client";

export const TOPUP = gql`
  mutation Mutation($args: TopUpInput!) {
    topup(args: $args) {
      gross_amount
      order_id
      payment_type
      status_message
      permata_va_number
      transaction_id
      transaction_status
      transaction_time
      va_numbers {
        bank
        va_number
      }
    }
  }
`;
