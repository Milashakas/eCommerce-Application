import { ClientResponse, ProductProjectionPagedSearchResponse, ProductProjection } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { ICatalogData, IProductData, IFilterData } from "../interfaces/IRedux";
import { IProductsListResponseData } from "../interfaces/IProducts";

const CATEGORIES_ID = {
  hair: "ab8d9d78-895c-4118-b456-8ef8daf35f0b",
  body: "a54cb7d0-445e-46a9-9ba5-f2c79d7a1e26",
  face: "054a4767-c156-44c4-8042-9b30e6a18b4b",
  "the-ordinary": "c4036828-5699-49bb-a0a0-964d84c0f0ba",
  nuxe: "16620333-742c-4e0c-896f-7e1666da0a5c",
};

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

const createQueryString = (filterData: IFilterData): string[] => {
  const queryString: string[] = [];
  if (filterData.priceRange) {
    const lowPrice = filterData.priceRange.low;
    const highPrice = filterData.priceRange.high;
    const priceQuery = `variants.price.centAmount:range (${lowPrice} to ${highPrice})`;
    queryString.push(priceQuery);
  }
  if (filterData.category) {
    queryString.push(`categories.id:"${CATEGORIES_ID[filterData.category]}"`);
  }

  return queryString;
};

// eslint-disable-next-line max-len
const getFilteredProductsList = async (
  filterData: IFilterData,
  sortDataValue: ICatalogData["sortValue"],
): Promise<IProductsListResponseData> => {
  const productsResponseData: IProductsListResponseData = {} as IProductsListResponseData;

  try {
    const response: ClientResponse<ProductProjectionPagedSearchResponse> = await adminApiRoot
      .productProjections()
      .search()
      .get({
        queryArgs: {
          limit: 9,
          "filter.query": createQueryString(filterData),
          sort: `${sortDataValue}`,
        },
      })
      .execute();

    const catalogData: ICatalogData = {
      total: response.body.total,
      offset: response.body.offset,
      productsList: converResultArray(response.body.results),
      sortValue: `${sortDataValue}`,
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
