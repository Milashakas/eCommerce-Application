import { ProductPagedQueryResponse, Product } from "@commercetools/platform-sdk";

interface IProductsListResponseData {
  statucCode?: number;
  productsListData?: ProductPagedQueryResponse;
  message?: string;
}

interface IProductResponseData {
  statucCode?: number;
  productData?: Product;
  message?: string;
}

interface IProductData {
  isData: boolean;
  data: Product | null;
  message: string | null | undefined;
}

export { IProductsListResponseData, IProductResponseData, IProductData };
