import FeedCard from "@/components/feedCard";
import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { BsTwitter, BsHash, BsEnvelope } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { PiBookmarkSimple, PiMoney } from "react-icons/pi";
// import {
//   HandleOnSuccess,
//   HandleOnError,
// } from "@/components/FeedCard/googleLogin";

import { RiNotification2Line } from "react-icons/ri";
// import { GoogleLogin } from "@react-oauth/google";

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
  // const { user } = useCurrentUser();
  // console.log(user);
  return (
    <div>
      <div className="grid grid-cols-12  h-screen w-screen px-56 ">
        <div className="col-span-3    pt-0 border-l-100">
          <div className="text-3xl transtion-smooth hover:bg-slate-600 rounded-full text-wrap h-fit w-fit p-1 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl pr-9">
            <ul className="">
              {sideBarMenuItems.map((item) => (
                <li
                  className=" hover:bg-slate-600 rounded-full text-lg flex justify-start items-center gap-2 h-fit w-fit p-2 py-1 cursor-pointer transition-all mt-3 "
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
        </div>
        <div className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-gray-600 h-screen  overflow-auto no-scrollbar">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="p-5 bg-slate-900 rounded-xl">
            <h1>New Here?</h1>

            {/* <GoogleLogin onSuccess={HandleOnSuccess} onError={HandleOnError} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
