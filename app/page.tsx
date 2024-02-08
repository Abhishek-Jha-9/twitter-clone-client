"use client";
import FeedCard from "@/components/feedCard";
import React from "react";

import PostCard from "@/components/postCard";

import { useGetAllTweets } from "@/clients/hooks/tweet";
import { Tweet } from "@/gql/graphql";
import TwitterLayout from "@/components/layout/twitterLayout";

export default function Home() {
  const { tweets = [] } = useGetAllTweets();
  return (
    <div>
      <TwitterLayout>
        <PostCard />
        {tweets?.map((tweet: any) =>
          tweet ? <FeedCard key={tweet?.id} data={tweet as Tweet} /> : null
        )}
      </TwitterLayout>
    </div>
  );
}
