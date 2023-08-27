/* eslint-disable no-param-reassign */
import { IAction, IState } from "../interfaces/IRedux";
import { SET_USER_PROFILE_DATA, LOGOUT_PROFILE } from "./actionTypes";
import { IUserProfileStoreData } from "../interfaces/IUserProfileData";

const rootReducer = <T>(state: IState, action: IAction<T>): IState => {
  if (action.type === "__INIT__") {
    return state;
  }
  if (action.type === SET_USER_PROFILE_DATA) {
    const userData: IUserProfileStoreData = action.payload as IUserProfileStoreData;
    state.userData = { ...userData };
    state.isAuth = true;
  }
  if (action.type === LOGOUT_PROFILE) {
    state.isAuth = false;
    delete state.userData;
  }
  return state;
};

export default rootReducer;
