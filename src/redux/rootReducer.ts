/* eslint-disable no-param-reassign */
import { IAction, IState } from "../interfaces/IRedux";
import { SET_USER_PROFILE_DATA } from "./actionTypes";
import { IUserProfileStoreData } from "../interfaces/IUserProfileData";

const rootReducer = <T>(state: IState, action: IAction<T>): IState => {
  if (action.type === "__INIT__") {
    return state;
  }
  if (action.type === SET_USER_PROFILE_DATA) {
    const userData: IUserProfileStoreData = action.payload as IUserProfileStoreData;
    state.userData = { ...userData };
  }
  return state;
};

export default rootReducer;
