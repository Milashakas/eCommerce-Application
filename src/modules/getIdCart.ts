import { IState } from "../interfaces/IRedux";
import store from "../redux/createStore";

const getProductCartId = (id: string) => {
  const state: IState = store.getState();
  const array = state.cart?.cartItems;
  const currentElem = array?.filter((item) => item.productId === id);
  const mainId = currentElem?.map((item) => item.id);
  if (mainId) {
    return mainId[0];
  }
  return "ff";
};

export default getProductCartId;
