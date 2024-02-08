import TwitterLayout from "@/components/layout/twitterLayout";
import type { NextPage } from "next";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import { UserById, useCurrentUser } from "@/clients/hooks/user";
import FeedCard from "@/components/feedCard";
import { Tweet } from "@/gql/graphql";
import { graphqlClient } from "@/clients/api";
import { getUserByIdQuery } from "@/graphql/query/user";
import { usePathname } from "next/navigation";
import { clearConfigCache } from "prettier";
// import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { notFound } from "next/navigation";

const fetchUserDataById = async (userId: string) => {
  try {
    const { getUserById }: any = await graphqlClient.request(getUserByIdQuery, {
      id: userId,
    });

    if (!getUserById) throw new Error(`User ${userId} not found`);
    return getUserById;
  } catch (error) {
    console.log(`Error fetching user ${userId}`);
    return null;
  }
};

const UserProfilepage = async ({ params }: { params: { params: {} } }) => {
  // console.log(params.profile);
  const userInfo = await fetchUserDataById(params.profile);
  if (!userInfo) notFound();
  // console.log(userInfo);
  return (
    <div>
      <TwitterLayout>
        <div>
          <nav className=" flex items-center gap-3 py-3 px-3">
            <BsArrowLeftShort className="text-4xl " />
            <div>
              <h1 className="text-2xl  font-bold">
                {userInfo?.firstName} {userInfo?.lastName}
              </h1>
              <h1 className="text-md  font-bold text-slate-600">
                {userInfo.tweets.length} Tweets
              </h1>
            </div>
          </nav>
          <div className="p-4 border-b border-slate-800">
            {userInfo && userInfo?.profileImageURL && (
              <Image
                src={userInfo?.profileImageURL}
                height={70}
                width={70}
                alt="user-image"
                className="rounded-full"
              />
            )}
            <h1 className="text-2xl ">Abhishek Jha</h1>
          </div>
          <div>
            {userInfo?.tweets.map((tweet: any) => (
              <FeedCard data={tweet as Tweet} key={tweet?.id} />
            ))}
          </div>
        </div>
      </TwitterLayout>
    </div>
  );
};

export default UserProfilepage;
