"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
// import { BiMessageRounded, BiUpload } from "react-icons/bi";
// import { FaRetweet } from "react-icons/fa";
// import { AiOutlineHeart } from "react-icons/ai";
import { useCurrentUser } from "@/clients/hooks/user";
import { BiImageAlt } from "react-icons/bi";
import { useCreateTweet } from "@/clients/hooks/tweet";
// import { HandleUploadImage } from "./googleLogin";

const PostCard: React.FC = () => {
  const { user } = useCurrentUser();
  const { mutate } = useCreateTweet();
  const HandleUploadImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("capture", "camera");
    input.click();
  }, []);

  const [content, setContent] = useState("");
  const handleCreateTweet = useCallback(() => {
    mutate({
      content,
    });
  }, [content, mutate]);

  return (
    <div className="grid grid-cols-12  mx-5 mt-4">
      <div className="col-span-1 gap-1">
        {user?.profileImageURL && (
          <Image
            src={user?.profileImageURL}
            alt="user-image"
            height={35}
            width={35}
            className="rounded-full"
          />
        )}
      </div>
      <div className="col-span-11">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="tweet"
          rows={3}
          className="w-full bg-transparent text-lg px-3 border-b border-slate-700"
          placeholder="What's happening"
        ></textarea>
        <div className=" flex justify-between items-center mx-2 py-2">
          <BiImageAlt
            className="text-xl hover:cursor-pointer"
            onClick={HandleUploadImage}
          />
          <button
            onClick={handleCreateTweet}
            className="bg-[#253d4d] p-1 rounded-full  mt-2 hover:bg-sky-600 text-sm hover:cursor-pointer"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
