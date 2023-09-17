// Interfaces
import { ICartRequestData, ICartResponseData } from "../../interfaces/ICart";
// import { Cart } from "@commercetools/platform-sdk";

// API
import getAuthUserCart from "../../api/getAuthUserCart";
import createUserCart from "../../api/createUserCart";
import getNonAuthUserCart from "../../api/getNonAuthUserCart";

// Modules
import { setAnonymosUserCartID } from "../../modules/getSetAnonymosUserCartID";

const getCartAsyncAction = async (cartRequestData: ICartRequestData) => {
  // const cartData: Cart = {} as Cart;
  if (cartRequestData.cartType === "authUser") {
    let cartResponseData: ICartResponseData = await getAuthUserCart(cartRequestData.id as string);

    if (cartResponseData.statucCode !== 200) {
      cartResponseData = await createUserCart(cartRequestData.id as string);
    }
  } else {
    const anonymousUserCartID = cartRequestData.id;
    let cartResponseData: ICartResponseData = {} as ICartResponseData;

    if (!anonymousUserCartID) {
      cartResponseData = await createUserCart();

      if (cartResponseData.statucCode !== 201) return;

      const cartData = cartResponseData.cartData?.id as string;
      setAnonymosUserCartID(cartData);
    } else {
      cartResponseData = await getNonAuthUserCart(anonymousUserCartID);
    }
  }
};

export default getCartAsyncAction;
