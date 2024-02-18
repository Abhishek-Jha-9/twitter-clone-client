import { gql } from "graphql-request";

export const followUserMutations = gql`
  #graphql
  mutation followMutation($to: ID!) {
    followUser(to: $to)
  }
`;

export const unFollowUserMutations = gql`
  #graphql
  mutation unFollowMutation($to: ID!) {
    unfollowUser(to: $to)
  }
`;
