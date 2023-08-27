import { Product } from "@commercetools/platform-sdk";
import { IUserProfileStoreData } from "./IUserProfileData";

interface IAction<T> {
  type: string;
  payload?: T;
}

interface IState {
  isAuth: boolean;
  isPreloader: boolean;
  catalog: {
    currentPage?: number;
    productsList?: Product[];
  };
  userData?: IUserProfileStoreData;
}

export { IAction, IState };
