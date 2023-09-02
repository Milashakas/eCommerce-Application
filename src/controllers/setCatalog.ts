import createProduct from "../assets/styles/productBlock";
import { IState } from "../interfaces/IRedux";
import store from "../redux/createStore";

const getProductsList = () => {
  const state: IState = store.getState();
  const catalogProducts = state.catalog.productsList;
  return catalogProducts;
};

const setActiveCategoryLink = () => {
  // eslint-disable-next-line no-undef
  const catalogLinks = document.querySelectorAll(".catalog-links-list a") as NodeListOf<HTMLLinkElement>;
  const path = window.location.pathname;

  catalogLinks.forEach((link: HTMLLinkElement) => {
    if (link.getAttribute("href") === path) link.classList.add("activeCategoryLink");
  });
};

const setCatalog = () => {
  const list = getProductsList();
  const catalog = document.querySelector(".catalog-section-products") as HTMLElement;
  catalog.innerHTML = "";
  setActiveCategoryLink();

  list?.forEach((item) => {
    const name: string = item.name["en-US"];
    const img = item.masterVariant.images;
    const firstImage: string = img ? img[0].url : "...";
    const price = item.masterVariant.prices;
    const currentPrice: number = price ? ((price[0].value.centAmount / 100) as number) : 0;
    const currentDescription = item.description ? item.description["en-US"] : "There is no description";

    catalog.innerHTML += createProduct(name, firstImage, currentPrice, currentDescription);
  });
};

export default setCatalog;
