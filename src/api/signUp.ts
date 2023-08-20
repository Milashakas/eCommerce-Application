/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { ClientResponse, CustomerSignInResult } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { IUserSignUpData } from "../interfaces/IUserProfileData";

const signUp = async (signUpData: IUserSignUpData) => {
  try {
    const response: ClientResponse<CustomerSignInResult> = await adminApiRoot
      .customers()
      .post({
        body: { ...signUpData },
      })
      .execute();

    if (response.statusCode === 201) {
      console.log("Всё ок");
    }
  } catch (error) {
    console.log("Памылка ніжэй");
    console.log(error);
  }
};

export default signUp;
