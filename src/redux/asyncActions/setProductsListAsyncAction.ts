import { Product } from "@commercetools/platform-sdk";
import getProductsList from "../../api/getProductsList";
import { setProductsListAction, displayPreloaderAction } from "../actions";
import { IProductsListResponseData } from "../../interfaces/IProducts";
import { navigateTo } from "../../router";
import store from "../createStore";

const setProductsListAsyncAction = async () => {
  store.dispatch(displayPreloaderAction(true));

  const productsListResponseData: IProductsListResponseData = await getProductsList();
  const { statucCode } = productsListResponseData;

  if (!statucCode || (statucCode && !(statucCode >= 200 && statucCode < 299))) {
    navigateTo("/404");
    store.dispatch(displayPreloaderAction(false));
  } else {
    const productsList: Product[] = productsListResponseData.productsListData?.results as Product[];
    store.dispatch(setProductsListAction(productsList));
  }
};

export default setProductsListAsyncAction;
