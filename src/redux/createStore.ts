import { IAction, IState } from "../interfaces/IRedux";
import rootReducer from "./rootReducer";
import displayAuthUserProfileVew from "../controllers/displayAuthUserProfileVew";
import rerenderProfilePage from "../modules/rerenderProfilePage";
import editProfileData from "../controllers/editProfileData";

const INIT_STORE: IState = {
  isAuth: false,
  isPreloader: false,
  catalog: {
    total: 0,
    offset: 0,
    productsList: [],
    filterData: {
      category: undefined,
      priceRange: undefined,
    },
    sortValue: "id asc",
  },
  cart: undefined,
};

const createStore = () => {
  let state: IState = rootReducer(INIT_STORE, { type: "__INIT__" });
  let subscribers: CallableFunction[] = [];

  return {
    dispatch<T>(action: IAction<T>) {
      state = rootReducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    },
    subscribe(callbacksArr: CallableFunction[]) {
      subscribers = callbacksArr;
    },
    getState() {
      return state;
    },
  };
};

const store = createStore();
store.subscribe([displayAuthUserProfileVew, rerenderProfilePage, editProfileData]);

export default store;
