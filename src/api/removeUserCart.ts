import { adminApiRoot } from "./ApiClients";

// Interfaces
// import { ICartResponseData } from "../interfaces/ICart";
import IResponseError from "../interfaces/IResponseError";

// Store
import store from "../redux/createStore";

const removeUserCart = async () => {
  const cartID = store.getState().cart?.cartID as string;
  const cartVersion = store.getState().cart?.cartVersion as number;

  let responseStatusCode = NaN;

  try {
    const response = await adminApiRoot
      .carts()
      .withId({
        ID: cartID,
      })
      .delete({
        queryArgs: {
          version: cartVersion,
        },
      })
      .execute();

    responseStatusCode = response.statusCode as number;
  } catch (error) {
    if (error instanceof Error) {
      const responseError: IResponseError = error as IResponseError;
      console.log(responseError.message);
    }
  }

  return responseStatusCode;
};

export default removeUserCart;
