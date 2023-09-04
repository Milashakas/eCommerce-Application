import { ClientResponse, CustomerSignInResult } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { IUserSignUpData, ISignUpDataResult } from "../interfaces/IUserProfileData";
import IResponseError from "../interfaces/IResponseError";

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
      signUpDataResult.userToken = response.body.customer.id;
    }
  } catch (error) {
    if (error instanceof Error) {
      const responseError: IResponseError = error as IResponseError;
      signUpDataResult.statusCode = responseError.statusCode;
      signUpDataResult.errorMessage = error.message;
    }
  }

  return signUpDataResult;
};

export default signUp;
