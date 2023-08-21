import { getUserProfileData } from "../models/userProfileData";

const showPopupMenu = (event: Event) => {
  const target: Element = event.target as Element;
  const popupMenu: HTMLSpanElement = document.querySelector(".profile-popup-menu") as HTMLSpanElement;

  if (!target.closest(".profile") && !popupMenu.classList.contains("hide")) {
    popupMenu.classList.add("hide");
    return;
  }

  if (target.closest(".profile") && !target.closest(".profile-popup-menu")) {
    popupMenu.classList.toggle("hide");
  }
};

const showHeaderUserIcon = () => {
  const authBtnsBlock: HTMLDivElement = document.querySelector(".header-profile") as HTMLDivElement;
  const profileIcon: HTMLDivElement = document.querySelector(".header-icons .profile ") as HTMLDivElement;

  authBtnsBlock.classList.add("hide");
  profileIcon.classList.remove("hideElement");

  window.addEventListener("click", showPopupMenu);
};

const showAuthUserProfileVew = () => {
  const isUserAuth: boolean = getUserProfileData().isAuth;

  if (!isUserAuth) return;

  showHeaderUserIcon();
};

export default showAuthUserProfileVew;
