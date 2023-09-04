import { ClientResponse, Customer } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import IResponseError from "../interfaces/IResponseError";
import getCutomerUpdateAction from "./getCutomerUpdateAction";

import store from "../redux/createStore";

const updateProfileData = async (editModeId: string, newValue: string) => {
  const userVersion = store.getState().userData?.version as number;
  const userToken = store.getState().userData?.userToken as string;

  let updateResponseCode: number = NaN;
  try {
    const response: ClientResponse<Customer> = await adminApiRoot
      .customers()
      .withId({
        ID: userToken,
      })
      .post({
        body: {
          version: userVersion,
          actions: [getCutomerUpdateAction(editModeId, newValue)],
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

export default updateProfileData;
