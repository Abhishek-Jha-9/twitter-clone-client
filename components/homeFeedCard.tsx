"use client";
import { useGetAllTweets } from "@/clients/hooks/tweet";
import FeedCard from "@/components/feedCard";
function HomeFeedCard() {
  const { tweets = [], data } = useGetAllTweets();

  return (
    <div className="border-8 bg-slate-600">
      {tweets &&
        tweets.map((tweet: any) => {
          <FeedCard key={tweet?.id} data={tweet} />;
        })}
    </div>
  );
}

export default HomeFeedCard;
