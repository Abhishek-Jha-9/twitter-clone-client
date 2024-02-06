// import { graphql } from "../../gql";
import { graphql } from "@/gql";
import gql from "graphql-tag";

export const verifyUserGoogleTokenQuery = gql`
  #graphql
  query VerifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`;
// console.log(verifyUserGoogleTokenQuery);
// console.log(
//   `in user.ts file ${verifyUserGoogleTokenQuery} and the typeof is ${typeof verifyUserGoogleTokenQuery}`
// );

export const getCurrentUserQuery = gql`
  query GetCurrentUser {
    getCurrentUser {
      email
      firstName
      lastName
      id
      profileImageURL
    }
  }
`;

console.log(getCurrentUserQuery);
console.log(
  `inside the user.ts and getCurrentUserQuery is ${getCurrentUserQuery}`
);
