"use client";
import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../api";
import { getAllTweetsQuery } from "@/graphql/query/tweet";

interface TweetsResponse {
  getAllTweets: {
    id: string;
    content: string;
    imageURL: string;
    author: {
      firstName: string;
      lastName: string;
      profileImageURL: string;
    };
  };
}

export const useGetAllTweets = () => {
  const query = useQuery<TweetsResponse>({
    queryKey: ["all-tweets"],
    queryFn: async () => await graphqlClient.request(getAllTweetsQuery),
  });
  return { ...query, tweets: query.data?.getAllTweets };
};
