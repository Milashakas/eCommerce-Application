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

  console.log("FSAFSAFSA\n", response);

  const updatedcartData: ICartData = {
    cartID: response.cartData?.id as string,
    cartVersion: response.cartData?.version as number,
    cartItems: response.cartData?.lineItems as LineItem[],
    totalPrice: response.cartData?.totalPrice.centAmount as number,
  };

  if (response.cartData?.discountCodes.length) {
    updatedcartData.discountCode = response.cartData.discountCodes[0].discountCode;
  }

  store.dispatch(setCartData(updatedcartData));
};

export default updateUserCartData;
