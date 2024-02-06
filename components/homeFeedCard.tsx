"use client";
import { useGetAllTweets } from "@/clients/hooks/tweet";
import FeedCard from "@/components/feedCard";
function HomeFeedCard() {
  const { tweets = [], data } = useGetAllTweets();
  console.log("here in homefeedcard");
  console.log(tweets);
  //   console.log(typeof tweets);
  //   console.log("this is data \n", data?.getAllTweets);

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
