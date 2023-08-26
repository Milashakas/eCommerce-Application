// import { getUserProfileData } from "../models/userProfileData";
import setProfilePopupMenuOptions from "../modules/setProfilePopupMenuOptions";
import store from "../redux/createStore";

const showPopupMenu = (event: Event) => {
  const target: Element = event.target as Element;
  const popupMenu: HTMLSpanElement = document.querySelector(".profile-popup-menu") as HTMLSpanElement;

  if (!target.closest(".profile") && !popupMenu.classList.contains("hideElement")) {
    popupMenu.classList.add("hideElement");
    return;
  }

  if (target.closest(".profile") && !target.closest(".profile-popup-menu")) {
    popupMenu.classList.toggle("hideElement");
  }
};

const showHeaderUserIcon = (authBtnsBlock: HTMLDivElement, profileIcon: HTMLDivElement) => {
  authBtnsBlock.classList.add("hideElement");
  profileIcon.classList.remove("hideElement");

  window.addEventListener("click", showPopupMenu);
};

const displayAuthUserProfileVew = () => {
  const isUserAuth: boolean = store.getState().isAuth;
  const authBtnsBlock: HTMLDivElement = document.querySelector(".header-profile") as HTMLDivElement;
  const profileIcon: HTMLDivElement = document.querySelector(".header-icons .profile ") as HTMLDivElement;

  if (!isUserAuth) {
    authBtnsBlock.classList.remove("hideElement");
    profileIcon.classList.add("hideElement");

    return;
  }

  showHeaderUserIcon(authBtnsBlock, profileIcon);
  setProfilePopupMenuOptions();
};

export default displayAuthUserProfileVew;
