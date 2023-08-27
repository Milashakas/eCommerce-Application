import signIn from "../api/signIn";
import { setUserToken } from "../modules/common/useUserToken";
import { navigateTo } from "../router";
import { IUserSignInData, ISignInResponseData } from "../interfaces/IUserProfileData";
import showPopupNotification from "../modules/showPopupNotification";
import clearAllFormData from "../modules/common/clearAllFormData";
import autoLogInAsyncAction from "../redux/asyncActions/autoLogInAsyncAction";

const setErrorMessage = (statucCode: number): string => {
  let errorMessage: string = "";
  if (statucCode === 400) {
    // eslint-disable-next-line operator-linebreak
    errorMessage =
      "The profile has not been found. Check whether email and password was correct or sign up new profile";
  } else {
    errorMessage = "There has just happened some error. Please, try to login later";
  }

  return errorMessage;
};

const logInProfile = async () => {
  // eslint-disable-next-line no-undef
  const formInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".login-form input");

  const userSignInData: IUserSignInData = {} as IUserSignInData;

  formInputs.forEach((input: HTMLInputElement) => {
    const inputPostId: keyof IUserSignInData = input.dataset.postid as keyof IUserSignInData;
    const inputValue: string = input.value;
    userSignInData[inputPostId] = inputValue;
  });

  const signInDataResult: ISignInResponseData = await signIn(userSignInData);

  if (signInDataResult.statusCode === 200) {
    const notificationMessage = "You have logged in successfully !";
    const userToken: string = signInDataResult.userProfileStoreData?.userToken as string;

    setUserToken(userToken);
    navigateTo("/");
    showPopupNotification({ classMode: "notification-success", message: notificationMessage });

    await autoLogInAsyncAction(); // Костыль
  } else {
    const notificationMessage = setErrorMessage(signInDataResult.statusCode as number);

    showPopupNotification({ classMode: "notification-error", message: notificationMessage });
  }

  clearAllFormData("login-form");
};

export default logInProfile;
