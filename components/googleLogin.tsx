"use client";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { CredentialResponse } from "@react-oauth/google";
import toast from "react-hot-toast";

const HandleOnSuccess = async (Credentialresponse: CredentialResponse) => {
  const googleToken = Credentialresponse.credential;
  if (!googleToken) return toast.error("No gooken token found!");
  const { verifyGoogleToken }: any = await graphqlClient.request(
    verifyUserGoogleTokenQuery,
    {
      token: googleToken,
    }
  );
  toast.success("Verfied Successfully!");

  if (verifyGoogleToken)
    window.localStorage.setItem("__Twitter-Clone-Token_", verifyGoogleToken);
};

const HandleOnError = () => {
  console.log("Login Failed!");
};

const onClick = () => console.log(Credential);

export { HandleOnSuccess, HandleOnError, onClick };
