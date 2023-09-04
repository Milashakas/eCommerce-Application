import { ClientResponse, Customer } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import IResponseError from "../interfaces/IResponseError";

import store from "../redux/createStore";

const changeProfilePassword = async (currentPassword: string, newPassword: string) => {
  const userVersion = store.getState().userData?.version as number;
  const userToken = store.getState().userData?.userToken as string;

  let updateResponseCode: number = NaN;

  try {
    const response: ClientResponse<Customer> = await adminApiRoot
      .customers()
      .password()
      .post({
        body: {
          id: userToken,
          version: userVersion,
          currentPassword,
          newPassword,
        },
      })
      .execute();

    updateResponseCode = response.statusCode as number;
  } catch (error) {
    if (error instanceof Error) {
      const responseError: IResponseError = error as IResponseError;
      updateResponseCode = responseError.statusCode as number;
    }
  }

  return updateResponseCode;
};

export default changeProfilePassword;
