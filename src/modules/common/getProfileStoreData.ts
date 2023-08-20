/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { Customer } from "@commercetools/platform-sdk";
import { IUserProfileStoreData, IAddressData } from "../../interfaces/IUserProfileData";

const getProfileStoreData = (customerData: Customer) => {
  const userProfileStoreData: IUserProfileStoreData = {
    isAuth: true,
    userToken: customerData.id,
    userBasicInfo: {
      email: customerData.email,
      password: customerData.password as string,
      firstName: customerData.firstName as string,
      lastName: customerData.lastName as string,
      dateOfBirth: customerData.dateOfBirth as string,
    },
    addresses: customerData.addresses as IAddressData[],
    defaultBillingAddress: customerData.defaultBillingAddressId,
    defaultShippingAddress: customerData.defaultShippingAddressId,
  };

  return userProfileStoreData;
};

export default getProfileStoreData;
