// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import { CategoryReference, LocalizedString, ProductTypeReference, ProductVariant } from "@commercetools/platform-sdk";
import { IUserProfileStoreData } from "./IUserProfileData";

interface IAction<T> {
  type: string;
  payload?: T;
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
interface IProductData {
  id: string;
  name: LocalizedString;
  categories: CategoryReference[];
  description?: LocalizedString;
  productType: ProductTypeReference;
  masterVariant: ProductVariant;
}

interface ICatalogData {
  offset?: number;
  total?: number;
  productsList: IProductData[];
}

interface IState {
  isAuth: boolean;
  isPreloader: boolean;
  catalog: ICatalogData;
  userData?: IUserProfileStoreData;
}

export { IAction, IState, ICatalogData, IProductData };
