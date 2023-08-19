/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { ClientResponse, CustomerSignInResult } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { IUserSignUpData } from "../interfaces/IUserProfileData";

const signUp = async (signUpData: IUserSignUpData) => {
  const response: ClientResponse<CustomerSignInResult> = await adminApiRoot
    .customers()
    .post({
      body: { ...signUpData },
    })
    .execute();

  console.log(response);
};

export default signUp;
