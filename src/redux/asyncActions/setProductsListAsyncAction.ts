import getProductsList from "../../api/getProductsList";
import {
  setProductsListAction,
  displayPreloaderAction,
  setCatalogFilterData,
  resetCatalogFilterData,
} from "../actions";
import { IProductsListResponseData } from "../../interfaces/IProducts";
import { navigateTo } from "../../router";
import store from "../createStore";
import { IProductData, IFilterData } from "../../interfaces/IRedux";
import getFilteredProductsList from "../../api/getFilteredProductsList";
import checkIsAnyCatalogFilter from "../../modules/checkIsAnyCatalogFilter";

const setProspectiveFilterCategory = () => {
  const path = window.location.pathname;
  const category: string = path.split("/")[2];

  if (category) {
    const categoryName = category.split("-")[1];
    store.dispatch(setCatalogFilterData({ category: categoryName as IFilterData["category"] }));
  } else store.dispatch(resetCatalogFilterData({ isResetCategory: true }));
};

const setProductsListAsyncAction = async (offset: number = 0) => {
  store.dispatch(displayPreloaderAction(true));

  setProspectiveFilterCategory();

  const isAnyFilterData = checkIsAnyCatalogFilter();

  let productsListResponseData: IProductsListResponseData = {} as IProductsListResponseData;

  if (isAnyFilterData) {
    const filterData: IFilterData = store.getState().catalog.filterData as IFilterData;
    const sortDataValue = store.getState().catalog.sortValue;

    // eslint-disable-next-line max-len
    productsListResponseData = await getFilteredProductsList(filterData, sortDataValue, offset);
  } else productsListResponseData = await getProductsList(offset);

  const { statucCode } = productsListResponseData;

  if (!statucCode || (statucCode && !(statucCode >= 200 && statucCode < 299))) {
    navigateTo("/404");
    store.dispatch(displayPreloaderAction(false));
  } else {
    // eslint-disable-next-line max-len
    const productsList: IProductData[] = productsListResponseData.catalogData?.productsList as IProductData[];
    store.dispatch(setProductsListAction(productsList));
  }
};

export default setProductsListAsyncAction;
