import { IState } from "../interfaces/IRedux";
import store from "../redux/createStore";

const setRemoveButton = () => {
  const state: IState = store.getState();
  const removeButton = document.querySelector(".cart-remove-button") as HTMLButtonElement;
  const cartButton = document.querySelector(".cart-button") as HTMLButtonElement;
  if (state.cart && cartButton) {
    const newItem = state.cart.cartItems.filter((item) => item.productId === cartButton.id);
    if (newItem.length === 1) {
      cartButton.classList.add("inactive");
      cartButton.setAttribute("disabled", "disabled");
      cartButton.style.cursor = "auto";
      removeButton.classList.remove("inactive");
      removeButton.removeAttribute("disabled");
      removeButton!.style.display = "block";
    }
  }
};

export default setRemoveButton;
