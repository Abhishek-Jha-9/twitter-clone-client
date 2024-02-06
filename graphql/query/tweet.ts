import gql from "graphql-tag";

export const getAllTweetsQuery = gql`
  query GetAllTweets {
    getAllTweets {
      id
      content
      imageURl
      author {
        firstName
        lastName
        profileImageURL
      }
    }
  }
`;
