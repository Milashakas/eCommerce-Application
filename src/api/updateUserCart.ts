import { CartUpdateAction } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";

// Interfaces
import { IUpdateCartdata, ICartResponseData } from "../interfaces/ICart";

// Store
import store from "../redux/createStore";
// import IResponseError from "../interfaces/IResponseError";

const getUpdateAction = (updateCartData: IUpdateCartdata): CartUpdateAction => {
  let action: CartUpdateAction = {
    action: updateCartData.action,
  } as CartUpdateAction;

  if (updateCartData.action === "addLineItem") {
    action = {
      action: updateCartData.action,
      productId: updateCartData.productID,
    };
  }

  if (updateCartData.action === "changeLineItemQuantity") {
    action = {
      action: updateCartData.action,
      lineItemId: updateCartData.productID,
      quantity: updateCartData.quantity as number,
    };
  }

  if (updateCartData.action === "removeLineItem") {
    action = {
      action: updateCartData.action,
      lineItemId: updateCartData.productID,
    };
  }

  return action;
};

const updateUserCart = async (updateCartData: IUpdateCartdata) => {
  const cartID = store.getState().cart?.cartID as string;
  const cartVersion = store.getState().cart?.cartVersion as number;

  const cartResponseData: ICartResponseData = {} as ICartResponseData;

  try {
    const response = await adminApiRoot
      .carts()
      .withId({
        ID: cartID,
      })
      .post({
        body: {
          version: cartVersion,
          actions: [getUpdateAction(updateCartData)],
        },
      })
      .execute();

    cartResponseData.cartData = response.body;
    cartResponseData.statucCode = response.statusCode;
  } catch (error) {
    console.log(error);
  }

  return cartResponseData;
};

export default updateUserCart;
