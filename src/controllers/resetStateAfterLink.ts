/* eslint-disable no-undef */
import store from "../redux/createStore";
import { resetCatalogFilterData } from "../redux/actions";

// Interfaces
import { IResetFilterData } from "../interfaces/IRedux";

const setResetStateAction = (linksArr: NodeListOf<HTMLLinkElement>) => {
  linksArr.forEach((link) => {
    const resetData: IResetFilterData = {
      isResetCategory: true,
      isResetPrice: true,
      isResetSearchTextData: true,
    };
    link.addEventListener("click", () => {
      store.dispatch(resetCatalogFilterData(resetData));
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
