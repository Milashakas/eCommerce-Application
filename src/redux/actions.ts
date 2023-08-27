import { SET_USER_PROFILE_DATA, LOGOUT_PROFILE } from "./actionTypes";
import { IAction } from "../interfaces/IRedux";
import { IUserProfileStoreData } from "../interfaces/IUserProfileData";

const setUserProfileDataAction = <T>(userProfileData: IUserProfileStoreData): IAction<T> => ({
  type: SET_USER_PROFILE_DATA,
  payload: userProfileData as T,
});

const logoutProfileAction = <T>(): IAction<T> => ({
  type: LOGOUT_PROFILE,
});

export { setUserProfileDataAction, logoutProfileAction };
