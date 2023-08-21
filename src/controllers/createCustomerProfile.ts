/* eslint-disable */
import { IUserBasicInfo, IUserSignUpData, IAddressData, ISignUpDataResult } from "../interfaces/IUserProfileData";
import signUp from "../api/signUp";
import showPopupNotification from "../modules/showPopupNotification";
import { setUserToken } from "../modules/common/useUserToken";
import { navigateTo } from "../router";
import clearAllFormData from "../modules/common/clearAllFormData";
import autoLogIn from "./autoLogIn";

const getFormBasicInfo = (): IUserBasicInfo => {
  let userBasicInfo: IUserBasicInfo = {} as IUserBasicInfo; // init value. Must be filled in according to interface!

  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".user-basic-info input");

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
    const inputPostId: keyof IAddressData = input.dataset.postid as keyof IAddressData;
    const inputValue: string = input.value;

    if (!inputPostId) return;

    if (input.closest(".billing-address-block")) inputValue && (billingAddress[inputPostId] = inputValue);
    if (input.closest(".shipping-address-block")) inputValue && (shippingAddress[inputPostId] = inputValue);
  });

  const countryOptions: NodeListOf<HTMLOptionElement> = document.querySelectorAll("select option");

  countryOptions.forEach((option: HTMLOptionElement) => {
    const countryCode: string = option.dataset.code as string;

    if (option.closest(".billing-address-block")) option.selected && (billingAddress.country = countryCode);
    if (option.closest(".shipping-address-block")) option.selected && (shippingAddress.country = countryCode);
  });

  return [billingAddress, shippingAddress];
};

const setAddressesAsDefault = (signUpData: IUserSignUpData): IUserSignUpData => {
  const defaultBillingCheckbox: HTMLInputElement = document.querySelector("#default-billing") as HTMLInputElement;
  const defaultShippingCheckbox: HTMLInputElement = document.querySelector("#default-shipping") as HTMLInputElement;

  defaultBillingCheckbox.checked && (signUpData.defaultBillingAddress = 0);
  defaultShippingCheckbox.checked && (signUpData.defaultShippingAddress = 1);

  return signUpData;
};

const createCustomerProfile = async () => {
  const userBasicInfo = getFormBasicInfo();
  const [billingAddress, shippingAddress] = getFormAddressesData();

  let signUpData: IUserSignUpData = {
    ...userBasicInfo,
    addresses: [billingAddress, shippingAddress],
  };

  signUpData = setAddressesAsDefault(signUpData);

  const signUpDataResult: ISignUpDataResult = await signUp(signUpData);

  if (signUpDataResult.statusCode === 201) {
    const notificationMessage = "Your profile has been created successfully!";
    const userToken: string = signUpDataResult.userToken as string;

    setUserToken(userToken);
    navigateTo("/");
    showPopupNotification({ classMode: "notification-success", message: notificationMessage });

    await autoLogIn(); //Костыль
  } else {
    const notificationMessage = signUpDataResult.errorMessage;
    showPopupNotification({ classMode: "notification-error", message: notificationMessage });
  }

  clearAllFormData("registration-form");
};

export default createCustomerProfile;
