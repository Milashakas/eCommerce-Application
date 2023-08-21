import { getUserProfileData } from "../models/userProfileData";

const showHeaderUserIcon = () => {
  const authBtnsBlock: HTMLDivElement = document.querySelector(".header-profile") as HTMLDivElement;
  const profileIcon: HTMLDivElement = document.querySelector(".header-icons .profile ") as HTMLDivElement;

  authBtnsBlock.classList.add("none");
  profileIcon.classList.remove("hideElement");
};

const showAuthUserProfileVew = () => {
  const isUserAuth: boolean = getUserProfileData().isAuth;

  if (!isUserAuth) return;

  showHeaderUserIcon();
};

export default showAuthUserProfileVew;
