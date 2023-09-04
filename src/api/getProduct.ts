import { ClientResponse, Product } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { IProductResponseData } from "../interfaces/IProducts";

const getProduct = async (productId: string): Promise<IProductResponseData> => {
  const productResponseData: IProductResponseData = {} as IProductResponseData;

  try {
    // eslint-disable-next-line max-len
    const response: ClientResponse<Product> = await adminApiRoot.products().withId({ ID: productId }).get().execute();

    productResponseData.statucCode = response.statusCode;
    productResponseData.productData = response.body;
  } catch (error) {
    if (error instanceof Error) {
      productResponseData.message = error.message;
    }
  }

  return productResponseData;
};

export default getProduct;
