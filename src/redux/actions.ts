import {
  SET_USER_PROFILE_DATA,
  LOGOUT_PROFILE,
  SET_PRODUCTS_LIST,
  DISPLAY_PRELOADER,
  SET_CATALOG_FILTER_DATA,
  RESET_CATALOG_FILTER_DATA,
} from "./actionTypes";
import { IAction, IProductData, IFilterData } from "../interfaces/IRedux";
import { IUserProfileStoreData } from "../interfaces/IUserProfileData";

const setUserProfileDataAction = <T>(userProfileData: IUserProfileStoreData): IAction<T> => ({
  type: SET_USER_PROFILE_DATA,
  payload: userProfileData as T,
});

const logoutProfileAction = <T>(): IAction<T> => ({
  type: LOGOUT_PROFILE,
});

const setProductsListAction = <T>(productsList: IProductData[]): IAction<T> => ({
  type: SET_PRODUCTS_LIST,
  payload: productsList as T,
});

const displayPreloaderAction = <T>(flag: boolean): IAction<T> => ({
  type: DISPLAY_PRELOADER,
  payload: flag as T,
});

const setCatalogFilterData = <T>(filterData: IFilterData): IAction<T> => ({
  type: SET_CATALOG_FILTER_DATA,
  payload: filterData as T,
});

const resetCatalogFilterData = <T>(): IAction<T> => ({
  type: RESET_CATALOG_FILTER_DATA,
});

export { setUserProfileDataAction, logoutProfileAction, setProductsListAction };
export { displayPreloaderAction, setCatalogFilterData, resetCatalogFilterData };
