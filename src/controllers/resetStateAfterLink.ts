/* eslint-disable no-undef */
import store from "../redux/createStore";
import { resetCatalogFilterData } from "../redux/actions";

const setResetStateAction = (linksArr: NodeListOf<HTMLLinkElement>) => {
  linksArr.forEach((link) => {
    link.addEventListener("click", () => {
      store.dispatch(resetCatalogFilterData({ isResetCategory: true, isResetPrice: true }));
    });
  });
};

const resetStateAfterLink = () => {
  const headerLinks = document.querySelectorAll(".header-container a") as NodeListOf<HTMLLinkElement>;
  const footerLinks = document.querySelectorAll(".footer-container a") as NodeListOf<HTMLLinkElement>;

  setResetStateAction(headerLinks);
  setResetStateAction(footerLinks);
};

export default resetStateAfterLink;
