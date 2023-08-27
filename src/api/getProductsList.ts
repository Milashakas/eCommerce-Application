import { ClientResponse, ProductPagedQueryResponse } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { IProductsListResponseData } from "../interfaces/IProducts";

const getProductsList = async (): Promise<IProductsListResponseData> => {
  const productsListResponseData: IProductsListResponseData = {} as IProductsListResponseData;

  try {
    const response: ClientResponse<ProductPagedQueryResponse> = await adminApiRoot
      .products()
      .get({
        queryArgs: {
          limit: 12,
        },
      })
      .execute();

    productsListResponseData.statucCode = response.statusCode;
    productsListResponseData.productsListData = response.body;
  } catch (error) {
    if (error instanceof Error) {
      productsListResponseData.message = error.message;
    }
  }

  return productsListResponseData;
};

export default getProductsList;
