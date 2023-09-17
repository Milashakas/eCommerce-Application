import store from "../redux/createStore";
// Intefaces
import { IState } from "../interfaces/IRedux";
// import { Cart } from "@commercetools/platform-sdk";

// Async Actions
import { getCartAsyncAction } from "../redux/asyncActions/getCartAsyncAction";
// Modules
import { getAnonymosUserCartID } from "../modules/getSetAnonymosUserCartID";

const getUserCart = async () => {
  const state: IState = store.getState();
  const isUserAuth = state.isAuth;

  if (isUserAuth) {
    const userID: string = state.userData?.userToken as string;

    await getCartAsyncAction({ id: userID, cartType: "authUser" });
  } else {
    const anonymousUserCartID = getAnonymosUserCartID();

    await getCartAsyncAction({ id: anonymousUserCartID, cartType: "anonymous " });
  }
};

export default getUserCart;
