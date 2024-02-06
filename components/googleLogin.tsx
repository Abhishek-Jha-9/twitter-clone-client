"use client";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { CredentialResponse } from "@react-oauth/google";
import { QueryClient } from "@tanstack/query-core";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import toast from "react-hot-toast";

const HandleOnSuccess = async (Credentialresponse: CredentialResponse) => {
  const googleToken = Credentialresponse.credential;
  // const queryClient = useQueryClient();
  if (!googleToken) return toast.error("No gooken token found!");
  try {
    const { verifyGoogleToken }: any = await graphqlClient.request(
      verifyUserGoogleTokenQuery,
      {
        token: googleToken,
      }
    );
    // console.log(verifyGoogleToken);
    toast.success("Verfied Successfully!");

    if (verifyGoogleToken) {
      window.localStorage.setItem("__Twitter-Clone-Token_", verifyGoogleToken);
    }
    // await queryClient.invalidateQueries(["current-User"]);
    // [queryClient];
  } catch (error) {
    console.log("Error: " + error);
  }
};

const HandleOnError = () => {
  console.log("Login Failed!");
};

export { HandleOnSuccess, HandleOnError };
