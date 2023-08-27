import { Product } from "@commercetools/platform-sdk";
import getProductsList from "../api/getProductsList";
import { setProductsListAction } from "../redux/actions";

import store from "../redux/createStore";

const setProductsList = async () => {
  const productsList: Product[] = (await getProductsList()).productsListData?.results as Product[];
  store.dispatch(setProductsListAction(productsList));
};

export default setProductsList;
