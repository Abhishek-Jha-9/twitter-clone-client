import gql from "graphql-tag";

export const getAllTweetsQuery = gql`
  #graphql
  query GetAllTweets {
    getAllTweets {
      id
      content
      imageURL
      author {
        id
        firstName
        lastName
        profileImageURL
      }
    }
  }
`;

export const getSignedURLForTweetsQuery = gql`
  #graphql
  query GetSignedURL($imageName: String, $imageType: String) {
    getSignedURLForTweet(imageName: $imageName, imageType: $imageType)
  }
`;
// query Query($imageName: String, $imageType: String) {
//   getSignedURLForTweet(imageName: $imageName, imageType: $imageType)
// }
