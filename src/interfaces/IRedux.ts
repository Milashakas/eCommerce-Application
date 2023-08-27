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
  };
  userData?: IUserProfileStoreData;
}

export { IAction, IState };
