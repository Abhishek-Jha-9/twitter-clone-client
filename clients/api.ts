import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(
  "http://localhost:8000/graphql",
  {
    headers: () => ({
      Authorization: isClient
        ? `Bearer ${window.localStorage.getItem("__Twitter-Clone-Token_")}`
        : "",
    }),
  }
);

// console.log("inside the api.ts file");
// console.log(graphqlClient);
