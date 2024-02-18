"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useCurrentUser } from "@/clients/hooks/user";
import { HandleOnError, HandleOnSuccess } from "@/components/googleLogin";
import Image from "next/image";
import Link from "next/link";

function UserDetails() {
  const { user } = useCurrentUser();
  return (
    <div>
      {!user ? (
        <div className="p-5 bg-slate-900 rounded-xl">
          <h1 className="my-2 text-xl">New Here?</h1>
          <GoogleLogin onSuccess={HandleOnSuccess} onError={HandleOnError} />
        </div>
      ) : (
        <div className="px-4 py-2 bg-slate-900 rounded-xl hover:bg-gray-200">
          <h2 className="my-2 text-xl text-slate-200 mt-3">
            Users you may Know
          </h2>
          {user?.recommendedUsers?.map((el) => (
            <div className="flex items-center gap-2" key={el.id}>
              {el.profileImageURL && (
                <Image
                  src={el.profileImageURL}
                  alt="user_image"
                  width={40}
                  height={40}
                  className="rounded-full"
                  priority={true}
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                />
              )}
              <div className="text-lg ">
                {" "}
                <span className="mr-2">
                  {" "}
                  {el.firstName} {el.lastName}
                </span>
                <Link
                  href={`/${el?.id}`}
                  className="bg-white text-black text-sm px-5 py-1 rounded-lg width-full"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BadgeOnDownleftSidebar() {
  const { user } = useCurrentUser();

  return (
    <div className="flex gap-2 rounded-full bg-gray-800 px-3 py-2 hover:bg-gray-600 transition-all">
      {user && (
        <div>
          <div className=" block sm:hidden rounded-full h-fit w-fit">
            {user && user?.profileImageURL && (
              <Image
                src={user?.profileImageURL}
                height={35}
                width={35}
                alt="user-image"
                className="rounded-full"
              />
            )}
          </div>
          <div className=" hidden sm:block rounded-full  p-0 sm:h-fit sm:w-fit ">
            {user && user?.profileImageURL && (
              <Image
                src={user?.profileImageURL}
                height={35}
                width={35}
                alt="user-image"
                className="rounded-full"
              />
            )}
          </div>
        </div>
      )}
      <div className=" hidden sm:block ">
        <p>
          {user?.firstName} {user?.lastName}
        </p>
        <p className="text-sm text-slate-600">@{user?.email.split("@")[0]}</p>
      </div>
    </div>
  );
}

export { UserDetails, BadgeOnDownleftSidebar };
