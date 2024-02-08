"use client";
import {
  BadgeOnDownleftSidebar,
  UserDetails,
} from "@/app/initial-data/userDetails";
import { useGetAllTweets } from "@/clients/hooks/tweet";
import React, { useMemo, useState } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { BsEnvelope, BsHash, BsTwitter } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { PiBookmarkSimple, PiMoney } from "react-icons/pi";
import { RiNotification2Line } from "react-icons/ri";
import PostCard from "../postCard";
import { Tweet } from "@/gql/graphql";
import FeedCard from "../feedCard";
import { useCurrentUser } from "@/clients/hooks/user";
import Link from "next/link";

interface TwitterlayoutProps {
  children: React.ReactNode;
}

interface twitterSidebar {
  title: String;
  icon: React.ReactNode;
  link: string;
}

const TwitterLayout: React.FC<TwitterlayoutProps> = (props) => {
  // const [content, setContent] = useState("");
  const { user } = useCurrentUser();

  const sideBarMenuItems: twitterSidebar[] = useMemo(
    () => [
      {
        title: "Home",
        icon: <BiHomeCircle />,
        link: "/",
      },
      {
        title: "Explore",
        icon: <BsHash />,
        link: "/",
      },
      {
        title: "Notifications",
        icon: <RiNotification2Line />,
        link: "/",
      },

      {
        title: "Messages",
        icon: <BsEnvelope />,
        link: "/",
      },
      {
        title: "Bookmarks",
        icon: <PiBookmarkSimple />,
        link: "/",
      },
      {
        title: "Twitter Blue",
        icon: <PiMoney />,
        link: "/",
      },
      {
        title: "Profile",
        icon: <CgProfile />,
        link: `/${user?.id}`,
      },
      {
        title: "More",
        icon: <CiCircleMore />,
        link: "/",
      },
    ],
    [user?.id]
  );

  return (
    <div>
      <div className="grid grid-cols-12  h-screen w-screen sm:px-56  ">
        {/* left sideBars  */}
        <div className="col-span-1 sm:col-span-3   pt-0 border-l-100 relative ">
          <div className=" text-2xl  sm:text-3xl transtion-smooth hover:bg-slate-600 rounded-full text-wrap h-fit w-fit p-1 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl pr-9">
            <ul className="">
              {sideBarMenuItems.map((item) => (
                <li key={Math.floor(Math.random() * 1000000 + 1)}>
                  <Link
                    className=" hover:bg-slate-600 rounded-full text-lg text- flex justify-start items-center gap-2 h-fit w-fit p-2 py-1 cursor-pointer transition-all mt-2 "
                    href={item.link}
                  >
                    <span>{item.icon}</span>
                    <span className="hidden sm:inline">{item.title}</span>{" "}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pr-4 text-xl mt-4">
              <button className="hidden sm:block bg-[#1d9bf0] p-2 rounded-full w-full mt-4 hover:bg-sky-400">
                Tweet
              </button>
              <button className="block sm:hidden bg-[#1d9bf0] p-1 rounded-3xl w-fit h-fit mt-4 hover:bg-sky-400">
                <BsTwitter />
              </button>
            </div>
          </div>
          <div className=" text-sm mt-5  absolute bottom-1">
            <BadgeOnDownleftSidebar />
          </div>
        </div>

        {/* center Panel */}
        <div className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-gray-600 h-screen  overflow-auto no-scrollbar">
          {props.children}
        </div>
        {/* right side panel */}
        <div className="col-span-3 p-5">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default TwitterLayout;
