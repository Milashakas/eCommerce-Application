import { removeUserToken } from "./common/useUserToken";
import autoLogIn from "../controllers/autoLogIn";

const setProfilePopupMenuOptions = () => {
  const exitBtn: HTMLSpanElement = document.querySelector(".popup-menu-exit") as HTMLSpanElement;

  exitBtn.addEventListener("click", async () => {
    removeUserToken();
    await autoLogIn();
  });
};

export default setProfilePopupMenuOptions;
