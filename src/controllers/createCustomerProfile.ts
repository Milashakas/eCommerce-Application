/* eslint-disable */
import { IUserBasicInfo, IUserSignUpData, IAddressData } from "../interfaces/IUserProfileData";
import signUp from "../api/signUp";

const getFormBasicInfo = (): IUserBasicInfo => {
  let userBasicInfo: IUserBasicInfo = {} as IUserBasicInfo; // init value. Must be filled in according to interface!

  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    ".registration-form >.form-row:nth-child(-n+4) input",
  );

  inputs.forEach((input: HTMLInputElement) => {
    const inputId: keyof IUserBasicInfo = input.id as keyof IUserBasicInfo;
    const inputValue: string = input.value;
    userBasicInfo[inputId] = inputValue;
  });

  return userBasicInfo;
};

const getFormAddressesData = (): [IAddressData, IAddressData] => {
  let billingAddress: IAddressData = {} as IAddressData; // init value. Must be filled in according to interface!
  let shippingAddress: IAddressData = {} as IAddressData; // init value. Must be filled in according to interface!

  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    ".billing-address-block input, .shipping-address-block input",
  );

  inputs.forEach((input: HTMLInputElement) => {
    const inputId: keyof IAddressData = input.id as keyof IAddressData;
    const inputValue: string = input.value;

    if (input.closest(".billing-address-block")) inputValue && (billingAddress[inputId] = inputValue);
    if (input.closest(".shipping-address-block")) inputValue && (shippingAddress[inputId] = inputValue);
  });

  return [billingAddress, shippingAddress];
};

const createCustomerProfile = async () => {
  const btn: HTMLButtonElement = document.querySelector(".form-button") as HTMLButtonElement;

  btn.addEventListener("click", async () => {
    const userBasicInfo = getFormBasicInfo();
    const [billingAddress, shippingAddress] = getFormAddressesData();

    const signUpData: IUserSignUpData = {
      ...userBasicInfo,
      addresses: [billingAddress, shippingAddress],
      defaultShippingAddress: 0,
      defaultBillingAddress: 1,
    };

    console.log(signUpData);
    console.log(signUpData.dateOfBirth);
  });
};

export default createCustomerProfile;
