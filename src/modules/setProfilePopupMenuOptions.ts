import { removeUserToken } from "./common/useUserToken";
import { logoutProfileAction } from "../redux/actions";
import store from "../redux/createStore";
import { navigateTo } from "../router";

const setProfilePopupMenuOptions = () => {
  const exitBtn: HTMLSpanElement = document.querySelector(".popup-menu-exit") as HTMLSpanElement;

  exitBtn.addEventListener("click", async () => {
    removeUserToken();
    store.dispatch(logoutProfileAction());
    navigateTo("/");
  });
};

export default setProfilePopupMenuOptions;
