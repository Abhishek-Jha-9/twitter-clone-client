"use client";
import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "@/clients/api";
import { getCurrentUserQuery } from "@/graphql/query/user";
interface CurrentUserResponse {
  getCurrentUser: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImageURL: string;
  };
}

// const fetchData = async () => {
//   const response = await graphqlClient.request(getCurrentUserQuery);
//   return response;
// };

export const useCurrentUser = () => {
  const query = useQuery<CurrentUserResponse>({
    queryKey: ["current-User"],
    queryFn: async () => await graphqlClient.request(getCurrentUserQuery),
  });
  return { ...query, user: query.data?.getCurrentUser };
};

// const { user } = useCurrentUser();
// console.log(useCurrentUser());
