import { CategoryReference, LocalizedString, ProductTypeReference, ProductVariant } from "@commercetools/platform-sdk";

import { IUserProfileStoreData } from "./IUserProfileData";
import { ICartData } from "./ICart";

interface IAction<T> {
  type: string;
  payload?: T;
}

interface IProductData {
  id: string;
  name: LocalizedString;
  categories: CategoryReference[];
  description?: LocalizedString;
  productType: ProductTypeReference;
  masterVariant: ProductVariant;
}

interface IFilterPriceRange {
  low: number;
  high: number;
}

interface IFilterData {
  searchText?: string;
  category?: "hair" | "face" | "body" | "nuxe" | "ordinary" | "sale" | "clarins" | "kiehls";
  priceRange?: IFilterPriceRange;
}

interface IResetFilterData {
  isResetCategory?: boolean;
  isResetPrice?: boolean;
  isResetSearchTextData?: boolean;
}

interface ICatalogData {
  offset?: number;
  total?: number;
  productsList: IProductData[];
  filterData?: IFilterData;
  sortValue: "id asc" | "price asc" | "price desc" | "name.en-US asc" | "name.en-US desc";
}

interface IState {
  isAuth: boolean;
  isPreloader: boolean;
  catalog: ICatalogData;
  userData?: IUserProfileStoreData;
  cart?: ICartData;
}

interface IProductsListData {
  productsList: IProductData[];
  total: number;
  offset: number;
}

export { IAction, IState, ICatalogData, IProductData, IFilterData, IFilterPriceRange };
export { IResetFilterData, IProductsListData };
