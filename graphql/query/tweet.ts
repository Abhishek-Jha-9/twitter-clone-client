import gql from "graphql-tag";

export const getAllTweetsQuery = gql`
  query GetAllTweets {
    getAllTweets {
      id
      content
      imageURl
      author {
        id
        firstName
        lastName
        profileImageURL
      }
    }
  }
`;
