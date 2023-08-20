/* eslint-disable */
import { IUserBasicInfo, IUserSignUpData, IAddressData, ISignUpDataResult } from "../interfaces/IUserProfileData";
import signUp from "../api/signUp";
import showPopupNotification from "../modules/showPopupNotification";

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

  const countryOptions: NodeListOf<HTMLOptionElement> = document.querySelectorAll("select option");
  countryOptions.forEach((option: HTMLOptionElement) => {
    const countryCode: string = option.dataset.code as string;

    if (option.closest(".billing-address-block")) option.selected && (billingAddress.country = countryCode);
    if (option.closest(".shipping-address-block")) option.selected && (shippingAddress.country = countryCode);
  });

  return [billingAddress, shippingAddress];
};

const createCustomerProfile = async () => {
  const btn: HTMLButtonElement = document.querySelector(".form-button") as HTMLButtonElement;

  btn.addEventListener("click", async (event) => {
    console.log("CLICK REG");
    event?.preventDefault();
    const userBasicInfo = getFormBasicInfo();
    const [billingAddress, shippingAddress] = getFormAddressesData();

    const signUpData: IUserSignUpData = {
      ...userBasicInfo,
      addresses: [billingAddress, shippingAddress],
      defaultShippingAddress: 0,
      defaultBillingAddress: 1,
    };

    const testData = {
      email: "edel@gmail.com",
      password: "123Faasfzv",
      firstName: "Pavel",
      lastName: "Pavel",
      dateOfBirth: "1998-02-02",
      addresses: [
        {
          country: "UK",
          city: "London",
          streetName: "Some street",
          postalCode: "123",
          building: "14",
          apartment: "88",
        },
        {
          country: "UK",
          city: "London",
          streetName: "Some street",
          postalCode: "123",
          building: "14",
          apartment: "88",
        },
      ],
      defaultShippingAddress: 0,
      defaultBillingAddress: 1,
    };

    const signUpDataResult: ISignUpDataResult = await signUp(testData);

    if (signUpDataResult.statusCode === 201) {
      const notificationMessage = "Your profile has been created successfully!";
      showPopupNotification({ classMode: "notification-success", message: notificationMessage });
    } else {
      const notificationMessage = signUpDataResult.errorMessage;
      showPopupNotification({ classMode: "notification-error", message: notificationMessage });
    }
  });
};

export default createCustomerProfile;
