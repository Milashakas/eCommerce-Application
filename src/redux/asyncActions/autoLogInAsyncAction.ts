import { getUserToken, removeUserToken } from "../../modules/common/useUserToken";
import autoSignIn from "../../api/autoSignIn";
import { ISignInResponseData } from "../../interfaces/IUserProfileData";
import store from "../createStore";
import { setUserProfileDataAction, displayPreloaderAction } from "../actions";
import getUserCart from "../../controllers/getUserCart";

const autoLogInAsyncAction = async () => {
  store.dispatch(displayPreloaderAction(true));

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

  await getUserCart();
};

export default autoLogInAsyncAction;
