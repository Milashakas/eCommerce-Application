import { adminApiRoot } from "./ApiClients";

// Interfaces
import { ICartResponseData } from "../interfaces/ICart";
import IResponseError from "../interfaces/IResponseError";

const createUserCart = async (userID?: string): Promise<ICartResponseData> => {
  const cartResponseData: ICartResponseData = {} as ICartResponseData;

  try {
    const response = await adminApiRoot
      .carts()
      .post({
        body: {
          currency: "EUR",
          customerId: userID,
        },
      })
      .execute();

    cartResponseData.cartData = response.body;
    cartResponseData.statucCode = response.statusCode;
  } catch (error) {
    if (error instanceof Error) {
      const responseError: IResponseError = error as IResponseError;
      cartResponseData.message = error.message;
      cartResponseData.statucCode = responseError.code;
    }
  }

  return cartResponseData;
};

export default createUserCart;
