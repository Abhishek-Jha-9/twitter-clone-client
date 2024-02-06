import { graphql } from "@/gql";
import gql from "graphql-tag";

export const verifyUserGoogleTokenQuery = gql`
  #graphql
  query VerifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`;

export const getCurrentUserQuery = gql`
  query GetCurrentUser {
    getCurrentUser {
      id
      email
      firstName
      lastName
      profileImageURL
    }
  }
`;
