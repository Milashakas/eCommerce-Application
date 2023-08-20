interface IUserProfileData {
  isAuth: boolean;
}

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
  defaultShippingAddress: number;
  defaultBillingAddress: number;
}

export { IUserProfileData, IUserBasicInfo, IAddressData, IUserSignUpData };
