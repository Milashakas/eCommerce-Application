import {
  CategoryReference,
  LocalizedString,
  ProductTypeReference,
  ProductVariant,
  Cart,
} from "@commercetools/platform-sdk";
import { IUserProfileStoreData } from "./IUserProfileData";

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
  category?: "hair" | "face" | "body" | "nuxe" | "ordinary" | "sale" | "clarins" | "kiehls";
  priceRange?: IFilterPriceRange;
}

interface IResetFilterData {
  isResetCategory?: boolean;
  isResetPrice?: boolean;
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
  cart?: Cart;
}

export { IAction, IState, ICatalogData, IProductData, IFilterData, IFilterPriceRange };
export { IResetFilterData };
