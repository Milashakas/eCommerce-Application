import { IAction, IState } from "../interfaces/IRedux";
import rootReducer from "./rootReducer";

const INIT_STORE: IState = {
  isAuth: false,
  isPreloader: false,
  catalog: {},
};

const createStore = () => {
  let state: IState = rootReducer(INIT_STORE, { type: "__INIT__" });
  const subscribers: CallableFunction[] = [];

  return {
    dispatch(action: IAction) {
      state = rootReducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    },
    subscribe(callback: () => CallableFunction) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
};

const store = createStore();

export default store;
