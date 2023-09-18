import { IState } from "../interfaces/IRedux";
import store from "../redux/createStore";

// utils
import { getCurrentLocationPath } from "../utils/getCurrentLocationPath";

const setRedButton = () => {
  const path = getCurrentLocationPath();

  if (path !== "catalog") return;

  const state: IState = store.getState();
  const array = state.cart?.cartItems;

  // Всё ок, но почему-то синтаксис на 18 строке не работает, хотя должен
  array?.forEach((item) => {
    console.log(item);
    // const elem = document.getElementById(`${item.id}`);
    // const button = elem?.querySelector(".product-block-busket-button") as HTMLButtonElement;
    // console.log(elem);
    // button.innerHTML = "PRODUCT IN CART";
    // button.classList.add("product-block-busket-button-red");
    // button.classList.remove("product-block-busket-button");
  });
};

export default setRedButton;
