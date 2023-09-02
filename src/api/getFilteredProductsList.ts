import { ClientResponse, ProductProjectionPagedSearchResponse, ProductProjection } from "@commercetools/platform-sdk";
import { adminApiRoot } from "./ApiClients";
import { ICatalogData, IProductData, IFilterData } from "../interfaces/IRedux";
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

const createQueryString = (filterData: IFilterData): string[] => {
  const queryString: string[] = [];
  if (filterData.priceRange) {
    const lowPrice = filterData.priceRange.low;
    const highPrice = filterData.priceRange.high;
    const priceQuery = `variants.price.centAmount:range (${lowPrice} to ${highPrice})`;
    queryString.push(priceQuery);
  }

  return queryString;
};

// eslint-disable-next-line max-len
const getFilteredProductsList = async (filterData: IFilterData): Promise<IProductsListResponseData> => {
  const productsResponseData: IProductsListResponseData = {} as IProductsListResponseData;

  try {
    const response: ClientResponse<ProductProjectionPagedSearchResponse> = await adminApiRoot
      .productProjections()
      .search()
      .get({
        queryArgs: {
          "filter.query": createQueryString(filterData),
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
