// Interfaces
import { LineItem } from "@commercetools/platform-sdk";
import { ICartRequestData, ICartResponseData, ICartData } from "../../interfaces/ICart";

// API
import getAuthUserCart from "../../api/getAuthUserCart";
import createUserCart from "../../api/createUserCart";
import getNonAuthUserCart from "../../api/getNonAuthUserCart";

// Actions
import { setCartData } from "../actions";

// Modules
import { setAnonymosUserCartID } from "../../modules/getSetAnonymosUserCartID";

// Store
import store from "../createStore";

const getCartData = (cartResponseData: ICartResponseData) => {
  const cartData: ICartData = {
    cartID: cartResponseData.cartData?.id as string,
    cartItems: cartResponseData.cartData?.lineItems as LineItem[],
    cartVersion: cartResponseData.cartData?.version as number,
    totalPrice: cartResponseData.cartData?.totalPrice.centAmount as number,
  };

  return cartData;
};

const getCartAsyncAction = async (cartRequestData: ICartRequestData) => {
  let cartData: ICartData = {} as ICartData;

  if (cartRequestData.cartType === "authUser") {
    let cartResponseData: ICartResponseData = await getAuthUserCart(cartRequestData.id as string);

    if (cartResponseData.statucCode !== 200) {
      cartResponseData = await createUserCart(cartRequestData.id as string);
    }

    cartData = getCartData(cartResponseData);
  } else {
    const anonymousUserCartID = cartRequestData.id;
    let cartResponseData: ICartResponseData = {} as ICartResponseData;

    if (!anonymousUserCartID) {
      cartResponseData = await createUserCart();

      if (cartResponseData.statucCode !== 201) return;

      const cartID = cartResponseData.cartData?.id as string;
      setAnonymosUserCartID(cartID);
    } else {
      cartResponseData = await getNonAuthUserCart(anonymousUserCartID);
    }

    cartData = getCartData(cartResponseData);
  }

  store.dispatch(setCartData(cartData));
};

export { getCartAsyncAction, getCartData };
