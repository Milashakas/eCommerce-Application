import { ClientResponse, ProductProjectionPagedSearchResponse, ProductProjection } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { ICatalogData, IProductData } from "../interfaces/IRedux";
import { IProductsListResponseData } from "../interfaces/IProducts";

const converResultArray = (resultArr: ProductProjection[]): IProductData[] => {
  const convertedArray: IProductData[] = resultArr.map((product: ProductProjection) => ({
    id: product.id,
    name: product.name,
    categories: product.categories,
    description: product.description,
    productType: product.productType,
    masterVariant: product.masterVariant,
  }));

  return convertedArray;
};

const getFilteredProductsList = async (): Promise<IProductsListResponseData> => {
  const queryString: string = "variants.price.centAmount:range (0 to 1200)";
  const productsResponseData: IProductsListResponseData = {} as IProductsListResponseData;

  try {
    const response: ClientResponse<ProductProjectionPagedSearchResponse> = await adminApiRoot
      .productProjections()
      .search()
      .get({
        queryArgs: {
          filter: queryString,
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

export default getFilteredProductsList;
