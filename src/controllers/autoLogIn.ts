/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { getUserToken, removeUserToken } from "../modules/common/useUserToken";
import autoSignIn from "../api/autoSignIn";
import { ISignInResponseData } from "../interfaces/IUserProfileData";
import store from "../redux/createStore";
import { setUserProfileDataAction } from "../redux/actions";

const autoLogIn = async () => {
  const userToken = getUserToken();
  if (userToken) {
    const signInResponseData: ISignInResponseData = await autoSignIn(userToken as string);
    const { userProfileStoreData } = signInResponseData;
    if (userProfileStoreData) {
      store.dispatch(setUserProfileDataAction(userProfileStoreData));
    } else {
      removeUserToken();
      store.dispatch(setUserProfileDataAction({}));
    }
  }
};

export default autoLogIn;
