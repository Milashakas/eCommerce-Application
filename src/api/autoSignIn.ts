import { ClientResponse, Customer } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { ISignInResponseData } from "../interfaces/IUserProfileData";
import getProfileStoreData from "../modules/common/getProfileStoreData";

const autoSignIn = async (userToken: string): Promise<ISignInResponseData> => {
  const autoSignInResponseData: ISignInResponseData = {} as ISignInResponseData;

  try {
    const response: ClientResponse<Customer> = await adminApiRoot
      .customers()
      .withId({
        ID: userToken,
      })
      .get()
      .execute();

    const customerData: Customer = response.body;
    const userProfileStoreData = getProfileStoreData(customerData);
    autoSignInResponseData.userProfileStoreData = userProfileStoreData;
  } catch (error) {
    if (error instanceof Error) {
      autoSignInResponseData.errorMessage = error.message;
    }
  }

  return autoSignInResponseData;
};

export default autoSignIn;
