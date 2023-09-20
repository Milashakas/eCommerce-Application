import { IState } from "../interfaces/IRedux";
import store from "../redux/createStore";

// utils
import { getCurrentLocationPath } from "../utils/getCurrentLocationPath";

const setRedButton = () => {
  const path = getCurrentLocationPath();

  if (path !== "catalog") return;

  const state: IState = store.getState();
  const array = state.cart?.cartItems;
  console.log(array);
  // Всё ок, но почему-то синтаксис на 18 строке не работает, хотя должен
  array?.forEach((item) => {
    const elem = document.getElementById(`${item.productId}`) as HTMLAnchorElement;
    const button = elem?.querySelector(".product-block-busket-button") as HTMLButtonElement;
    if (button) {
      button.innerHTML = "PRODUCT IN CART";
      button.classList.add("product-block-busket-button-red");
      button.classList.remove("product-block-busket-button");
    }
  });
};

export default setRedButton;
