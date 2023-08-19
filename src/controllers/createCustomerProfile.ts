import { IUserSignUpData, IAddressData } from "../interfaces/IUserProfileData";
import signUp from "../api/signUp";

const createCustomerProfile = async () => {
  const billingAddress: IAddressData = {
    key: "billing",
    country: "UK",
    city: "London",
    streetName: "blabla",
    postalCode: "code-88",
  };

  const signUpData: IUserSignUpData = {
    email: "belarus@gmail.com",
    password: "123456789",
    firstName: "Pavel",
    lastName: "Pavel",
    dateOfBirth: "2018-10-12",
    addresses: [billingAddress],
  };

  const btn: HTMLButtonElement = document.querySelector(".form-button") as HTMLButtonElement;
  btn.addEventListener("click", async () => {
    await signUp(signUpData);
  });
};

export default createCustomerProfile;
