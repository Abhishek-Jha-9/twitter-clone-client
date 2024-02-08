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
  };
}

export const useCurrentUser = () => {
  const query = useQuery<CurrentUserResponse>({
    queryKey: ["current-User"],
    queryFn: async () => await graphqlClient.request(getCurrentUserQuery),
  });
  return { ...query, user: query.data?.getCurrentUser };
};

export const UserById = async (id: string) => {
  const { getUserById }: any = await graphqlClient.request(getUserByIdQuery, {
    id: id,
  });

  if (!getUserById) return null;

  return getUserById;
};
