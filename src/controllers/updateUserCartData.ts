// Interfaces
import { LineItem } from "@commercetools/platform-sdk";
import { IUpdateCartdata, ICartResponseData, ICartData } from "../interfaces/ICart";

// Actions
import { setCartData } from "../redux/actions";

// Store
import store from "../redux/createStore";

// API
import updateUserCart from "../api/updateUserCart";

const updateUserCartData = async (updateData: IUpdateCartdata) => {
  const response: ICartResponseData = await updateUserCart(updateData);

  const updatedcartData: ICartData = {
    cartID: response.cartData?.id as string,
    cartVersion: response.cartData?.version as number,
    cartItems: response.cartData?.lineItems as LineItem[],
  };

  store.dispatch(setCartData(updatedcartData));
  console.log(store.getState().cart);
};

export default updateUserCartData;
