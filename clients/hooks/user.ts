"use client";
import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "@/clients/api";
import { getCurrentUserQuery, getUserByIdQuery } from "@/graphql/query/user";
interface CurrentUserResponse {
  getCurrentUser: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImageURL: string;
    recommendedUsers: [
      {
        id: string;
        firstName: string;
        lastName: string;
        profileImageURL: string;
      },
    ];
    followers: [
      {
        id: string;

        firstName: string;
        lastName: string;
        profileImageURL: string;
      },
    ];
    following: [
      {
        id: string;

        firstName: string;
        lastName: string;
        profileImageURL: string;
      },
    ];
    tweets: [
      {
        id: string;
        content: string;
        imageURL: string;
        author: {
          id: string;
          firstName: string;
          lastName: string;
          profileImageURL: string;
        };
      },
    ];
  };
}

interface UserByIdResponse {
  getUserById: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImageURL: string;
    recommendedUsers: [
      {
        id: string;
        firstName: string;
        lastName: string;
        profileImageURL: string;
      },
    ];
    followers: [
      {
        id: string;
        firstName: string;
        lastName: string;
        profileImageURL: string;
      },
    ];
    following: [
      {
        id: string;

        firstName: string;
        lastName: string;
        profileImageURL: string;
      },
    ];
    tweets: [
      {
        id: string;
        content: string;
        imageURL: string;
        author: {
          id: string;
          firstName: string;
          lastName: string;
          profileImageURL: string;
        };
      },
    ];
  };
}

export const useCurrentUser = () => {
  const query = useQuery<CurrentUserResponse>({
    queryKey: ["current-User"],
    queryFn: async () => await graphqlClient.request(getCurrentUserQuery),
  });
  // console.log(`inside the useCurrentUser hooks for testing purposes only\n`);
  return { ...query, user: query.data?.getCurrentUser };
};

export const useUserById = ({ userId }: { userId: string }) => {
  const query = useQuery<UserByIdResponse>({
    queryKey: ["user-by-id"],
    queryFn: async () =>
      await graphqlClient.request(getUserByIdQuery, {
        id: userId,
      }),
  });
  return { ...query, user: query.data?.getUserById };
};

export const UserById = async (id: string) => {
  const { getUserById }: any = await graphqlClient.request(getUserByIdQuery, {
    id: id,
  });

  if (!getUserById) return null;

  return await getUserById;
};
