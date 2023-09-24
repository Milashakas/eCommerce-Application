import { IAction, IState } from "../interfaces/IRedux";
import rootReducer from "./rootReducer";
import displayAuthUserProfileVew from "../controllers/displayAuthUserProfileVew";
import rerenderProfilePage from "../modules/rerenderProfilePage";
import editProfileData from "../controllers/editProfileData";
import setBasketProductsList from "../modules/setBasketProductsList";
import setRedButton from "../modules/setRedButton";
import setCount from "../components/getCountCart";
import getProductCartId from "../modules/getIdCart";
import setRemoveButton from "../modules/addRemoveButton";

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
      searchText: undefined,
    },
    sortValue: "id asc",
  },
  cart: undefined,
};

const createStore = () => {
  let state: IState = rootReducer(INIT_STORE, { type: "__INIT__" });
  const subscribers: CallableFunction[] = [];

  return {
    dispatch<T>(action: IAction<T>) {
      state = rootReducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    },
    subscribe(callback: CallableFunction) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
};

const store = createStore();

store.subscribe(displayAuthUserProfileVew);
store.subscribe(rerenderProfilePage);
store.subscribe(editProfileData);
store.subscribe(setBasketProductsList);
store.subscribe(setRedButton);
store.subscribe(setCount);
store.subscribe(setRemoveButton);
store.subscribe(getProductCartId);
store.subscribe(setRemoveButton);

export default store;
