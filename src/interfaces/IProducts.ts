import { Product } from "@commercetools/platform-sdk";
import { ICatalogData } from "./IRedux";

interface IProductsListResponseData {
  statucCode?: number;
  catalogData?: ICatalogData;
  message?: string;
}

interface IProductResponseData {
  statucCode?: number;
  productData?: Product;
  message?: string;
}

interface IProductDataByID {
  isData: boolean;
  data: Product | null;
  message: string | null | undefined;
}

export { IProductsListResponseData, IProductResponseData, IProductDataByID };
