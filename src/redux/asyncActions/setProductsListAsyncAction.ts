import getProductsList from "../../api/getProductsList";
import { setProductsListAction, displayPreloaderAction, setCatalogFilterData } from "../actions";
import { IProductsListResponseData } from "../../interfaces/IProducts";
import { navigateTo } from "../../router";
import store from "../createStore";
import { IProductData, IFilterData } from "../../interfaces/IRedux";
import getFilteredProductsList from "../../api/getFilteredProductsList";
import checkIsAnyCatalogFilter from "../../modules/checkIsAnyCatalogFilter";

const PROSPECTIVE_CATEGORY_NAME = ["hair", "body", "face"];

const setProspectiveFilterCategory = () => {
  const path = window.location.pathname;
  const category: string = path.split("/")[2];

  if (category) {
    const categoryName = category.split("-")[1];

    if (PROSPECTIVE_CATEGORY_NAME.indexOf(categoryName)) {
      store.dispatch(setCatalogFilterData({ category: categoryName as IFilterData["category"] }));
    }
  }
};

const setProductsListAsyncAction = async () => {
  store.dispatch(displayPreloaderAction(true));
  setProspectiveFilterCategory();

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
