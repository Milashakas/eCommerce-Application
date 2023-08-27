import { Product } from "@commercetools/platform-sdk";

import { SET_USER_PROFILE_DATA, LOGOUT_PROFILE, SET_PRODUCTS_LIST, DISPLAY_PRELOADER } from "./actionTypes";
import { IAction } from "../interfaces/IRedux";
import { IUserProfileStoreData } from "../interfaces/IUserProfileData";

const setUserProfileDataAction = <T>(userProfileData: IUserProfileStoreData): IAction<T> => ({
  type: SET_USER_PROFILE_DATA,
  payload: userProfileData as T,
});

const logoutProfileAction = <T>(): IAction<T> => ({
  type: LOGOUT_PROFILE,
});

const setProductsListAction = <T>(productsList: Product[]): IAction<T> => ({
  type: SET_PRODUCTS_LIST,
  payload: productsList as T,
});

const displayPreloaderAction = <T>(flag: boolean): IAction<T> => ({
  type: DISPLAY_PRELOADER,
  payload: flag as T,
});

export { setUserProfileDataAction, logoutProfileAction, setProductsListAction };
export { displayPreloaderAction };
