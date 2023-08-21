interface IUserBasicInfo {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

interface IAddressData {
  country: string;
  city: string;
  streetName: string;
  postalCode: string;
  building?: string;
  apartment?: string;
}

interface IUserSignUpData extends IUserBasicInfo {
  addresses: IAddressData[];
  defaultShippingAddress?: number;
  defaultBillingAddress?: number;
}

interface ISignUpDataResult {
  statusCode: number | undefined;
  errorMessage?: string;
  userToken?: string;
}

interface IUserProfileStoreData {
  isAuth: boolean;
  userToken?: string;
  userBasicInfo?: IUserBasicInfo;
  addresses?: IAddressData[];
  defaultShippingAddress?: number | string;
  defaultBillingAddress?: number | string;
}

interface ISignInResponseData {
  userProfileStoreData?: IUserProfileStoreData;
  errorMessage?: string;
  statusCode: number | undefined;
}

interface IUserSignInData {
  password: string;
  email: string;
}

export { IUserProfileStoreData, IUserBasicInfo, IAddressData, IUserSignUpData, ISignUpDataResult };
export { ISignInResponseData, IUserSignInData };
