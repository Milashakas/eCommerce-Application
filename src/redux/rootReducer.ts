/* eslint-disable no-param-reassign */
import { IAction, IState, IFilterData, IResetFilterData, ICatalogData, IProductsListData } from "../interfaces/IRedux";
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
import { IUserProfileStoreData } from "../interfaces/IUserProfileData";
import { ICartData } from "../interfaces/ICart";

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
    const productsListData: IProductsListData = action.payload as IProductsListData;
    state.catalog.productsList = productsListData.productsList;
    state.catalog.total = productsListData.total;
    state.catalog.offset = productsListData.offset;
    state.isPreloader = false;
  }

  if (action.type === SET_CATALOG_FILTER_DATA) {
    const filterData: IFilterData = action.payload as IFilterData;
    const { category } = filterData;
    const { priceRange } = filterData;
    const { searchText } = filterData;
    if (state.catalog.filterData) {
      if (category) state.catalog.filterData.category = category;
      if (priceRange) state.catalog.filterData.priceRange = priceRange;
      if (searchText) state.catalog.filterData.searchText = searchText;
    }
  }

  if (action.type === RESET_CATALOG_FILTER_DATA) {
    const isResetData: IResetFilterData = action.payload as IResetFilterData;
    if (isResetData.isResetCategory) delete state.catalog.filterData?.category;
    if (isResetData.isResetPrice) delete state.catalog.filterData?.priceRange;
    if (isResetData.isResetSearchTextData) delete state.catalog.filterData?.searchText;
  }

  if (action.type === SET_SORT_VALUE) {
    const sortValue: ICatalogData["sortValue"] = action.payload as ICatalogData["sortValue"];
    state.catalog.sortValue = sortValue;
  }

  if (action.type === SET_CART_DATA) {
    const cartData: ICartData = action.payload as ICartData;
    state.cart = cartData;
  }
  return state;
};

export default rootReducer;
