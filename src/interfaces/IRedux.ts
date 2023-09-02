import { CategoryReference, LocalizedString, ProductTypeReference, ProductVariant } from "@commercetools/platform-sdk";
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
  category?: "hair" | "face" | "body" | "nuxe" | "the-ordinary";
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
}

interface IState {
  isAuth: boolean;
  isPreloader: boolean;
  catalog: ICatalogData;
  userData?: IUserProfileStoreData;
}

export { IAction, IState, ICatalogData, IProductData, IFilterData, IFilterPriceRange };
export { IResetFilterData };
