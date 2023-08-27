/* eslint-disable no-param-reassign */
import { Product } from "@commercetools/platform-sdk";
import { IAction, IState } from "../interfaces/IRedux";
import { SET_USER_PROFILE_DATA, LOGOUT_PROFILE, SET_PRODUCTS_LIST } from "./actionTypes";
import { IUserProfileStoreData } from "../interfaces/IUserProfileData";

const rootReducer = <T>(state: IState, action: IAction<T>): IState => {
  if (action.type === "__INIT__") {
    return state;
  }
  if (action.type === SET_USER_PROFILE_DATA) {
    const userData: IUserProfileStoreData = action.payload as IUserProfileStoreData;
    state.userData = { ...userData };
    state.isAuth = true;
    state.isPreloader = false;
  }
  if (action.type === LOGOUT_PROFILE) {
    state.isAuth = false;
    delete state.userData;
  }
  if (action.type === SET_PRODUCTS_LIST) {
    const productsList: Product[] = action.payload as Product[];
    state.catalog.productsList = productsList;
    state.isPreloader = false;
  }
  return state;
};

export default rootReducer;
