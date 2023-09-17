// Interfaces
import { LineItem } from "@commercetools/platform-sdk";
import { ICartRequestData, ICartResponseData } from "../../interfaces/ICart";

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
  let cartData: LineItem[] = {} as LineItem[];

  if (cartRequestData.cartType === "authUser") {
    let cartResponseData: ICartResponseData = await getAuthUserCart(cartRequestData.id as string);

    if (cartResponseData.statucCode !== 200) {
      cartResponseData = await createUserCart(cartRequestData.id as string);
    }

    cartData = cartResponseData.cartData?.lineItems as LineItem[];
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

    cartData = cartResponseData.cartData?.lineItems as LineItem[];
  }

  store.dispatch(setCartData(cartData));
};

export default getCartAsyncAction;
