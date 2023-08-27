import { ProductPagedQueryResponse } from "@commercetools/platform-sdk";

interface IProductsListResponseData {
  statucCode?: number;
  productsListData?: ProductPagedQueryResponse;
  message?: string;
}

export default IProductsListResponseData;
