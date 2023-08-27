/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { ClientResponse, CustomerSignInResult, Customer } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { IUserProfileStoreData, ISignInResponseData, IUserSignInData } from "../interfaces/IUserProfileData";
import getProfileStoreData from "../modules/common/getProfileStoreData";
import IResponseError from "../interfaces/IResponseError";

const signIn = async (userSignInData: IUserSignInData): Promise<ISignInResponseData> => {
  const signInResponseData: ISignInResponseData = {} as ISignInResponseData;

  try {
    const response: ClientResponse<CustomerSignInResult> = await adminApiRoot
      .login()
      .post({
        body: {
          email: userSignInData.email,
          password: userSignInData.password,
        },
      })
      .execute();

    const customerData: Customer = response.body.customer;
    const userProfileStoreData: IUserProfileStoreData = getProfileStoreData(customerData);
    signInResponseData.userProfileStoreData = userProfileStoreData;
    signInResponseData.statusCode = response.statusCode;
  } catch (error) {
    if (error instanceof Error) {
      const responseError: IResponseError = error as IResponseError;
      signInResponseData.statusCode = responseError.statusCode;
      signInResponseData.errorMessage = error.message;
    }
  }

  return signInResponseData;
};

export default signIn;
