interface IUserProfileData {
  isAuth: boolean;
}

interface IAddressData {
  key: string;
  country: string;
  city: string;
  streetName: string;
  postalCode: string;
  building: string;
}

interface IUserSignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  addresses: IAddressData[];
  defaultShippingAddress: number;
  defaultBillingAddress: number;
}

export { IUserProfileData, IUserSignUpData };
