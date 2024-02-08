"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useCurrentUser } from "@/clients/hooks/user";
import { HandleOnError, HandleOnSuccess } from "@/components/googleLogin";
import Image from "next/image";

function UserDetails() {
  const { user } = useCurrentUser();
  // console.log("User Details");
  // console.log(user);
  return (
    <div>
      {!user && (
        <div className="p-5 bg-slate-900 rounded-xl">
          <h1>New Here?</h1>
          <GoogleLogin onSuccess={HandleOnSuccess} onError={HandleOnError} />
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
        <p>{user?.email}</p>
      </div>
    </div>
  );
}

export { UserDetails, BadgeOnDownleftSidebar };
