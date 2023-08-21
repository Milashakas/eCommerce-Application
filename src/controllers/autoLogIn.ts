/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { getUserToken, removeUserToken } from "../modules/common/useUserToken";
import autoSignIn from "../api/autoSignIn";
import { ISignInResponseData, IUserProfileStoreData } from "../interfaces/IUserProfileData";
import { setUserProfileFullData } from "../models/userProfileData";
import displayAuthUserProfileVew from "./displayAuthUserProfileVew";

const setInitUserProfileStoreData = () => {
  const initUserProfileStoreData: IUserProfileStoreData = { isAuth: false };
  setUserProfileFullData(initUserProfileStoreData);
};

const autoLogIn = async () => {
  const userToken = getUserToken();

  if (userToken) {
    const signInResponseData: ISignInResponseData = await autoSignIn(userToken as string);
    const { userProfileStoreData } = signInResponseData;

    if (userProfileStoreData) {
      setUserProfileFullData(userProfileStoreData);
      displayAuthUserProfileVew(true);
    } else {
      removeUserToken();
      setInitUserProfileStoreData();
      displayAuthUserProfileVew(false);
    }
  } else {
    setInitUserProfileStoreData();
    displayAuthUserProfileVew(false);
  }
};

export default autoLogIn;
