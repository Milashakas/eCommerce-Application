/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { ClientResponse, CustomerSignInResult } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { IUserSignUpData, ISignUpDataResult } from "../interfaces/IUserProfileData";

const signUp = async (signUpData: IUserSignUpData): Promise<ISignUpDataResult> => {
  const signUpDataResult: ISignUpDataResult = {} as ISignUpDataResult;

  try {
    const response: ClientResponse<CustomerSignInResult> = await adminApiRoot
      .customers()
      .post({
        body: { ...signUpData },
      })
      .execute();

    if (response.statusCode === 201) {
      signUpDataResult.statusCode = response.statusCode;
    }
  } catch (error) {
    if (error instanceof Error) {
      signUpDataResult.errorMessage = error.message;
    }
  }

  return signUpDataResult;
};

export default signUp;
