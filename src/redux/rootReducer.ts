/* eslint-disable no-param-reassign */
import { IAction, IState, IProductData, IFilterData } from "../interfaces/IRedux";
import {
  SET_USER_PROFILE_DATA,
  LOGOUT_PROFILE,
  SET_PRODUCTS_LIST,
  DISPLAY_PRELOADER,
  SET_CATALOG_FILTER_DATA,
  RESET_CATALOG_FILTER_DATA,
} from "./actionTypes";
import { IUserProfileStoreData } from "../interfaces/IUserProfileData";

const rootReducer = <T>(state: IState, action: IAction<T>): IState => {
  if (action.type === "__INIT__") {
    return state;
  }
  if (action.type === DISPLAY_PRELOADER) {
    const flag: boolean = action.payload as boolean;
    state.isPreloader = flag;
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
    const productsList: IProductData[] = action.payload as IProductData[];
    state.catalog.productsList = productsList;
    state.isPreloader = false;
  }
  if (action.type === SET_CATALOG_FILTER_DATA) {
    const filterData: IFilterData = action.payload as IFilterData;
    state.catalog.filterData = { ...filterData };
  }
  if (action.type === RESET_CATALOG_FILTER_DATA) {
    delete state.catalog.filterData;
  }
  return state;
};

export default rootReducer;
