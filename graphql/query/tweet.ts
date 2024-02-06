import gql from "graphql-tag";

export const getAllTweetsQuery = gql`
  query GetAllTweets {
    getAllTweets {
      id
      content
      imageURL
      author {
        firstName
        lastName
        profileImageURL
      }
    }
  }
`;
