/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { ClientResponse, CustomerSignInResult } from "@commercetools/platform-sdk";
import { unauthorizedUserApiRoot } from "./ApiClients";
import { IUserSignUpData } from "../interfaces/IUserProfileData";

const signUp = async (signUpData: IUserSignUpData) => {
  const response: ClientResponse<CustomerSignInResult> = await unauthorizedUserApiRoot
    .customers()
    .post({
      body: { ...signUpData },
    })
    .execute();

  console.log(response);
};

export default signUp;
