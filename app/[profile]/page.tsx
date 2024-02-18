"use client";
import TwitterLayout from "@/components/layout/twitterLayout";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import FeedCard from "@/components/feedCard";
import { Tweet } from "@/gql/graphql";
import { notFound, usePathname } from "next/navigation";
import { useCurrentUser, useUserById } from "@/clients/hooks/user";
import { useCallback, useMemo } from "react";
import { graphqlClient } from "@/clients/api";
import {
  followUserMutations,
  unFollowUserMutations,
} from "@/graphql/mutation/user";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

const UserProfilepage = ({ params }: { params: string }) => {
  const pathname = usePathname().split("/")[1];

  const { user: userInfo } = useCurrentUser();
  // if (!userInfo) notFound();

  const { user: userByprofileId } = useUserById({ userId: pathname });

  const queryClient = useQueryClient();

  const amIFollowing: Boolean = useMemo(() => {
    if (!userInfo) return false;
    return (
      userInfo?.following?.findIndex((el) => el?.id === userByprofileId?.id) >=
      0
    );
  }, [userInfo, userByprofileId?.id]);

  /* Handle Follow User Mutation on Click */

  const handleFollowUser = useCallback(async () => {
    console.log("follow Clicked");
    if (!userInfo) return;
    await graphqlClient.request(followUserMutations, {
      to: userByprofileId?.id,
    });
    await queryClient.invalidateQueries({
      queryKey: ["current-User"],
      exact: true,
    });
  }, [userByprofileId?.id, queryClient]);

  /* Handle UnFollow User Mutation on Click */

  const handleUnFollowUser = useCallback(async () => {
    console.log("Unfollow Clicked");
    if (!userInfo) return;
    await graphqlClient.request(unFollowUserMutations, {
      to: userByprofileId?.id,
    });
    await queryClient.invalidateQueries({
      queryKey: ["current-User"],
      exact: true,
    });
  }, [userByprofileId?.id, queryClient]);

  return (
    <div>
      <TwitterLayout>
        <div>
          <nav className=" flex items-center gap-3 py-3 px-3">
            <Link href="/">
              <BsArrowLeftShort className="text-4xl hover:bg-slate-700 transition-colors rounded-full p-1" />
            </Link>
            <div>
              <h1 className="text-2xl  font-bold">
                {userByprofileId?.firstName} {userByprofileId?.lastName}
              </h1>
              <h1 className="text-md  font-bold text-slate-600">
                {userByprofileId?.tweets?.length
                  ? userByprofileId.tweets?.length
                  : "No"}{" "}
                Tweets
              </h1>
            </div>
          </nav>
          <div className="p-4 border-b border-slate-800">
            {userByprofileId && userByprofileId?.profileImageURL && (
              <Image
                src={userByprofileId?.profileImageURL}
                height={70}
                width={70}
                alt="user-image"
                className="rounded-full"
                priority
              />
            )}
            <h1 className="text-2xl ">
              {userByprofileId?.firstName} {userByprofileId?.lastName}
            </h1>
            <div className="flex justify-between  mr-8">
              <div className="flex gap-4 mt-2 text-sm text-gray-600 justify-between">
                <span>
                  {userByprofileId?.followers?.length
                    ? userByprofileId?.followers?.length
                    : "No"}{" "}
                  followers
                </span>

                <span>
                  {userByprofileId?.following?.length
                    ? userByprofileId?.following?.length
                    : "No"}{" "}
                  following
                </span>
              </div>
              <div>
                {userInfo?.id !== userByprofileId?.id && (
                  <>
                    {amIFollowing ? (
                      <button
                        onClick={handleUnFollowUser}
                        className="bg-slate-900  rounded-full text-lg text-bold  px-2 py-1 text-slate-300 hover:bg-slate-800 transtion-all"
                      >
                        UnFollow
                      </button>
                    ) : (
                      <button
                        onClick={handleFollowUser}
                        className="bg-slate-900  rounded-full text-lg text-bold  px-2 py-1 text-slate-300 hover:bg-slate-800 transtion-all"
                      >
                        Follow
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div>
            {userByprofileId?.tweets?.map((tweet: any) => (
              <FeedCard data={tweet as Tweet} key={tweet?.id} />
            ))}
          </div>
        </div>
      </TwitterLayout>
    </div>
  );
};

export default UserProfilepage;
