/* eslint-disable */
import signIn from "../api/signIn";
import setUserToken from "../modules/common/setUserToken";
import { navigateTo } from "../router";
import { IUserSignInData, ISignInResponseData } from "../interfaces/IUserProfileData";
import showPopupNotification from "../modules/showPopupNotification";
import clearAllFormData from "../modules/common/clearAllFormData";

const logIn = async () => {
  const logInBtn: HTMLButtonElement = document.querySelector(".login-form .form-button") as HTMLButtonElement;

  logInBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const formInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".login-form input");

    let userSignInData: IUserSignInData = {} as IUserSignInData;

    formInputs.forEach((input: HTMLInputElement) => {
      const inputPostId: keyof IUserSignInData = input.id as keyof IUserSignInData;
      const inputValue: string = input.value;
      userSignInData[inputPostId] = inputValue;
    });

    const signInDataResult: ISignInResponseData = await signIn(userSignInData);

    if (signInDataResult.statusCode === 200) {
      const notificationMessage = "Welcome!";
      const userToken: string = signInDataResult.userProfileStoreData?.userToken as string;

      setUserToken(userToken);
      navigateTo("/");
      showPopupNotification({ classMode: "notification-success", message: notificationMessage });
    } else {
      const notificationMessage = signInDataResult.errorMessage;
      showPopupNotification({ classMode: "notification-error", message: notificationMessage });
    }

    clearAllFormData("login-form");
  });
};

export default logIn;
