import { IState } from "../interfaces/IRedux";
import store from "../redux/createStore";

const setRedButton = async () => {
  const path = window.location.pathname;

  if (path !== "/catalog") {
    return;
  }
  const state: IState = store.getState();
  const array = state.cart?.cartItems;
  console.log(array);
  console.log(state);
  array?.forEach((item) => {
    const elem = document.getElementById(item.id);
    const button = elem?.querySelector(".product-block-busket-button") as HTMLButtonElement;
    console.log(elem);
    button.innerHTML = "PRODUCT IN CART";
    button.classList.add("product-block-busket-button-red");
    button.classList.remove("product-block-busket-button");
  });
};

export default setRedButton;
