import ProductItem from "../components/ProductItem";
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

const disableBasketBtnLinkingInfo = () => {
  const allBtns = document.querySelectorAll(".product-block .product-block-busket-button");
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => event.preventDefault());
  });
};

const setCatalog = () => {
  const list = getProductsList();
  const catalog = document.querySelector(".catalog-section-products") as HTMLElement;
  catalog.innerHTML = "";
  setActiveCategoryLink();

  list?.forEach((item) => {
    const name: string = item.name["en-US"];
    const { images } = item.masterVariant;
    const firstImg: string = images ? images[0].url : "...";
    const { prices } = item.masterVariant;
    const price: number = prices ? ((prices[0].value.centAmount / 100) as number) : 0;
    const description = item.description ? item.description["en-US"] : "There is no description";
    const productID = item.id;

    catalog.innerHTML += ProductItem(name, firstImg, price, description, productID);
  });

  disableBasketBtnLinkingInfo();
};

export default setCatalog;
