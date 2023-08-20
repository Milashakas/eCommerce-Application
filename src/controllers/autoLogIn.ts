/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import getUserToken from "../modules/common/getUserToken";
import autoSignIn from "../api/autoSignIn";
import { ISignInResponseData } from "../interfaces/IUserProfileData";

const autoLogIn = async () => {
  const userToken = getUserToken();

  if (userToken) {
    const response: ISignInResponseData = await autoSignIn(userToken as string);
    console.log(response);
  }
};

export default autoLogIn;
