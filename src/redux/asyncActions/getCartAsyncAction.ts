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

const getCartAsyncAction = async (cartRequestData: ICartRequestData) => {
  const cartData: ICartData = {} as ICartData;

  if (cartRequestData.cartType === "authUser") {
    let cartResponseData: ICartResponseData = await getAuthUserCart(cartRequestData.id as string);

    if (cartResponseData.statucCode !== 200) {
      cartResponseData = await createUserCart(cartRequestData.id as string);
    }

    cartData.cartID = cartResponseData.cartData?.id as string;
    cartData.cartItems = cartResponseData.cartData?.lineItems as LineItem[];
    cartData.cartVersion = cartResponseData.cartData?.version as number;
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

    cartData.cartID = cartResponseData.cartData?.id as string;
    cartData.cartItems = cartResponseData.cartData?.lineItems as LineItem[];
    cartData.cartVersion = cartResponseData.cartData?.version as number;
  }

  store.dispatch(setCartData(cartData));
};

export default getCartAsyncAction;
