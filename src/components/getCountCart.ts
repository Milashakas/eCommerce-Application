import { IState } from "../interfaces/IRedux";
import store from "../redux/createStore";

const setCount = async () => {
  const count = document.querySelector(".basket-count") as HTMLSpanElement;
  const state: IState = store.getState();
  console.log(state);
  const array = state.cart?.cartItems;
  let counter = 0;
  if (array) {
    for (let i = 0; i <= array.length - 1; i += 1) {
      counter += Number(array[i].quantity);
    }
  }
  console.log(array);
  count.innerHTML = String(counter);
};

export default setCount;
