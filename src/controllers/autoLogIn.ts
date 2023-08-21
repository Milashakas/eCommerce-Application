/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { getUserToken, removeUserToken } from "../modules/common/useUserToken";
import autoSignIn from "../api/autoSignIn";
import { ISignInResponseData } from "../interfaces/IUserProfileData";
import { setUserProfileFullData } from "../models/userProfileData";

const autoLogIn = async () => {
  const userToken = getUserToken();

  if (userToken) {
    const signInResponseData: ISignInResponseData = await autoSignIn(userToken as string);
    const { userProfileStoreData } = signInResponseData;

    if (userProfileStoreData) {
      setUserProfileFullData(userProfileStoreData);
    } else removeUserToken();
  }
};

export default autoLogIn;
