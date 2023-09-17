// API
import removeUserCart from "../api/removeUserCart";
import createUserCart from "../api/createUserCart";

// Interfaces
import { ICartResponseData } from "../interfaces/ICart";

// Modules
import { getCartData } from "../redux/asyncActions/getCartAsyncAction";
import { removeAnonymosUserCartID } from "../modules/getSetAnonymosUserCartID";

// Store
import store from "../redux/createStore";

// Actions
import { setCartData } from "../redux/actions";

const removeUserCartData = async () => {
  const response = await removeUserCart();

  if (response === 200) {
    removeAnonymosUserCartID();
    const cartResponseData: ICartResponseData = await createUserCart();

    if (cartResponseData.statucCode !== 200) return;

    const cartData = getCartData(cartResponseData);
    store.dispatch(setCartData(cartData));
  }
};

export default removeUserCartData;
