// store
import store from "../redux/createStore";

// Controllers
import removeUserCartData from "../controllers/removeUserCartData";

const clearEntireCart = () => {
  const clearBtn = document.querySelector(".clear-cart-button") as HTMLButtonElement;

  clearBtn.addEventListener("click", async () => {
    const totalCartItems = store.getState().cart?.cartItems.length;

    if (!totalCartItems) return;

    await removeUserCartData();
  });
};

export default clearEntireCart;
