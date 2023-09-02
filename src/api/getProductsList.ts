import { ClientResponse, ProductPagedQueryResponse, Product } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { IProductsListResponseData } from "../interfaces/IProducts";
import { ICatalogData, IProductData } from "../interfaces/IRedux";

const converResultArray = (resultArr: Product[]): IProductData[] => {
  const convertedArray: IProductData[] = resultArr.map((product: Product) => ({
    id: product.id,
    name: product.masterData.current.name,
    categories: product.masterData.current.categories,
    description: product.masterData.current.description,
    productType: product.productType,
    masterVariant: product.masterData.current.masterVariant,
  }));

  return convertedArray;
};

const getProductsList = async (): Promise<IProductsListResponseData> => {
  const productsResponseData: IProductsListResponseData = {} as IProductsListResponseData;

  try {
    const response: ClientResponse<ProductPagedQueryResponse> = await adminApiRoot
      .products()
      .get({
        queryArgs: {
          limit: 9,
          sort: "id asc",
        },
      })
      .execute();

    const catalogData: ICatalogData = {
      total: response.body.total,
      offset: response.body.offset,
      productsList: converResultArray(response.body.results),
    };

    productsResponseData.catalogData = catalogData;
    productsResponseData.statucCode = response.statusCode;
  } catch (error) {
    if (error instanceof Error) {
      productsResponseData.message = error.message;
    }
  }

  return productsResponseData;
};

export default getProductsList;
