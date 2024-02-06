import FeedCard from "@/components/feedCard";
import React, { useCallback } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { BsTwitter, BsHash, BsEnvelope } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { PiBookmarkSimple, PiMoney } from "react-icons/pi";
import { HandleOnSuccess, HandleOnError } from "@/components/googleLogin";

import { RiNotification2Line } from "react-icons/ri";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCurrentUser } from "@/clients/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import {
  UserDetails,
  BadgeOnDownleftSidebar,
} from "@/app/initial-data/userDetails";
import PostCard from "@/components/postCard";

interface twitterSidebar {
  title: String;
  icon: React.ReactNode;
}

const sideBarMenuItems: twitterSidebar[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BsHash />,
  },
  {
    title: "Notifications",
    icon: <RiNotification2Line />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimple />,
  },
  {
    title: "Twitter Blue",
    icon: <PiMoney />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12  h-screen w-screen px-56  ">
        <div className="col-span-3    pt-0 border-l-100 relative ">
          <div className="text-3xl transtion-smooth hover:bg-slate-600 rounded-full text-wrap h-fit w-fit p-1 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl pr-9">
            <ul className="">
              {sideBarMenuItems.map((item) => (
                <li
                  className=" hover:bg-slate-600 rounded-full text-lg text- flex justify-start items-center gap-2 h-fit w-fit p-2 py-1 cursor-pointer transition-all mt-2 "
                  key={Math.floor(Math.random() * 1000000 + 1)}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>{" "}
                </li>
              ))}
            </ul>
            <div className="pr-4 text-xl mt-4">
              <button className="bg-[#1d9bf0] p-2 rounded-full w-full mt-4 hover:bg-sky-400">
                Tweet
              </button>
            </div>
          </div>
          <div className=" text-sm mt-5  absolute bottom-1">
            <BadgeOnDownleftSidebar />
          </div>
        </div>
        <div className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-gray-600 h-screen  overflow-auto no-scrollbar">
          <PostCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <UserDetails />
        </div>
      </div>
    </div>
  );
}
