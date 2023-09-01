import store from "../redux/createStore";
import { IState } from "../interfaces/IRedux";

const productsList = () => {
  const state: IState = store.getState();
  const catalogProducts = state.catalog.productsList;
  console.log(catalogProducts);
  return catalogProducts;
};

export default productsList;
