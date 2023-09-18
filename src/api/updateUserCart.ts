import { CartUpdateAction } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";

// Interfaces
import { IUpdateCartdata, ICartResponseData } from "../interfaces/ICart";
import IResponseError from "../interfaces/IResponseError";

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
      productId: updateCartData.productID as string,
    };
  }

  if (updateCartData.action === "changeLineItemQuantity") {
    action = {
      action: updateCartData.action,
      lineItemId: updateCartData.productID as string,
      quantity: updateCartData.quantity as number,
    };
  }

  if (updateCartData.action === "removeLineItem") {
    action = {
      action: updateCartData.action,
      lineItemId: updateCartData.productID as string,
    };
  }

  if (updateCartData.action === "addDiscountCode") {
    action = {
      action: updateCartData.action,
      code: updateCartData.code as string,
    };
  }

  if (updateCartData.action === "removeDiscountCode") {
    action = {
      action: updateCartData.action,
      discountCode: {
        id: "9ab7adbf-0ae1-4b44-a7e7-89f88dea482d",
        typeId: "discount-code",
      },
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
    if (error instanceof Error) {
      const responseError: IResponseError = error as IResponseError;
      cartResponseData.statucCode = responseError.statusCode as number;
    }
  }

  return cartResponseData;
};

export default updateUserCart;
