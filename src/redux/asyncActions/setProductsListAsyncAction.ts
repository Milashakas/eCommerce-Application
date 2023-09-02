import getProductsList from "../../api/getProductsList";
import { setProductsListAction, displayPreloaderAction } from "../actions";
import { IProductsListResponseData } from "../../interfaces/IProducts";
import { navigateTo } from "../../router";
import store from "../createStore";
import { IProductData, IFilterData } from "../../interfaces/IRedux";
import getFilteredProductsList from "../../api/getFilteredProductsList";
import checkIsAnyCatalogFilter from "../../modules/checkIsAnyCatalogFilter";

const setProductsListAsyncAction = async () => {
  store.dispatch(displayPreloaderAction(true));

  const isAnyFilterData = checkIsAnyCatalogFilter();

  let productsListResponseData: IProductsListResponseData = {} as IProductsListResponseData;

  if (isAnyFilterData) {
    const filterData: IFilterData = store.getState().catalog.filterData as IFilterData;
    productsListResponseData = await getFilteredProductsList(filterData);
  } else productsListResponseData = await getProductsList();

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
