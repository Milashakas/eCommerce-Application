import { IAddressData } from "./IUserProfileData";

interface IProfileInfo {
  firstName: string;
  lastName: string;
  birthDate: string;
}

interface IAdressessInfo {
  addresses: IAddressData[];
  defaultBilling: string | number | undefined;
  defaultShipping: string | number | undefined;
}

// eslint-disable-next-line import/prefer-default-export
export { IProfileInfo, IAdressessInfo };
