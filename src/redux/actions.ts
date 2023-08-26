import { SET_USER_PROFILE_DATA, LOGOUT_PROFILE } from "./actionTypes";
import { IAction } from "../interfaces/IRedux";
import { IUserProfileStoreData } from "../interfaces/IUserProfileData";

const setUserProfileDataAction = (userProfileData: IUserProfileStoreData): IAction => ({
  type: SET_USER_PROFILE_DATA,
  payload: userProfileData,
});

const logoutProfileAction = (): IAction => ({
  type: LOGOUT_PROFILE,
});

export { setUserProfileDataAction, logoutProfileAction };
