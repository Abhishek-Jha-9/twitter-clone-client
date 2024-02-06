import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className=" border border-gray-600 border-x-0 border-b-0 p-5 hover:bg-slate-950 transition-all cursor-pointer ">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/91289928?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11 text-base">
          <h5>Abhishek R Jha</h5>

          <p>
            Abhishek The Great. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quas facilis, debitis optio sed repellendus,Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Impedit natus
            laudantium quam?
          </p>
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
