import {
  SET_USER_PROFILE_DATA,
  LOGOUT_PROFILE,
  SET_PRODUCTS_LIST,
  DISPLAY_PRELOADER,
  SET_CATALOG_FILTER_DATA,
  RESET_CATALOG_FILTER_DATA,
  SET_SORT_VALUE,
  SET_CART_DATA,
} from "./actionTypes";
import { IAction, IFilterData, IResetFilterData, ICatalogData, IProductsListData } from "../interfaces/IRedux";
import { IUserProfileStoreData } from "../interfaces/IUserProfileData";
import { ICartData } from "../interfaces/ICart";

const setUserProfileDataAction = <T>(userProfileData: IUserProfileStoreData): IAction<T> => ({
  type: SET_USER_PROFILE_DATA,
  payload: userProfileData as T,
});

const logoutProfileAction = <T>(): IAction<T> => ({
  type: LOGOUT_PROFILE,
});

const setProductsListAction = <T>(productsList: IProductsListData): IAction<T> => ({
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

const resetCatalogFilterData = <T>(resetData: IResetFilterData): IAction<T> => ({
  type: RESET_CATALOG_FILTER_DATA,
  payload: resetData as T,
});

const setCatalogSortData = <T>(sortValue: ICatalogData["sortValue"]): IAction<T> => ({
  type: SET_SORT_VALUE,
  payload: sortValue as T,
});

const setCartData = <T>(cartData: ICartData): IAction<T> => ({
  type: SET_CART_DATA,
  payload: cartData as T,
});

export { setUserProfileDataAction, logoutProfileAction, setProductsListAction, setCartData };
export { displayPreloaderAction, setCatalogFilterData, resetCatalogFilterData, setCatalogSortData };
