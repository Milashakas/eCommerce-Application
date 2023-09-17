import { adminApiRoot } from "./ApiClients";

// Interfaces
import { IUpdateCartdata, ICartResponseData } from "../interfaces/ICart";

// Store
import store from "../redux/createStore";
// import IResponseError from "../interfaces/IResponseError";

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
          actions: [
            {
              action: updateCartData.action,
              productId: updateCartData.productID,
            },
          ],
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
