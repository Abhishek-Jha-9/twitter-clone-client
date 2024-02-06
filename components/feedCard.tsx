"use client";
import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Tweet } from "@/gql/graphql";
import { useGetAllTweets } from "@/clients/hooks/tweet";

interface FeedCardProps {
  data: Tweet;
}

const FeedCard: React.FC<FeedCardProps> = (props) => {
  // const { tweet = [] } = useGetAllTweets();
  const { data } = props;

  return (
    <div className=" border border-gray-600 border-x-0 border-b-0 p-5 hover:bg-slate-950 transition-all cursor-pointer ">
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-1 ">
          {data?.author?.profileImageURL && (
            <Image
              src={data?.author?.profileImageURL}
              alt="user-image"
              height={40}
              width={40}
              className="rounded-full"
            />
          )}
        </div>
        <div className="col-span-11 text-base ml-3">
          <h5>
            {data?.author?.firstName} {data?.author?.lastName}
          </h5>

          <p>{data?.content}</p>
          <div className="flex justify-between mt-5 text-base  items-center mr-16">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
