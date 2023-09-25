import ProductItem from "../components/ProductItem";
import { IState } from "../interfaces/IRedux";
import store from "../redux/createStore";

// Modules
import setPagination from "./setPagination";
import setRedButton from "../modules/setRedButton";

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
  const catalog = document.querySelector(".catalog-products-list") as HTMLElement;
  const paginationLine = document.querySelector(".catalog-pagination") as HTMLDivElement;
  paginationLine.innerHTML = "";
  catalog.innerHTML = "";

  setActiveCategoryLink();

  list?.forEach((item) => {
    const name: string = item.name["en-US"];
    const { images } = item.masterVariant;
    const firstImg: string = images ? images[0].url : "...";
    const { prices } = item.masterVariant;
    let price: number | string = prices ? ((prices[0].value.centAmount / 100) as number) : 0;
    price = price.toFixed(2);
    const description = item.description ? item.description["en-US"] : "There is no description";
    const productID = item.id;
    let dis: string | undefined;

    if (prices) {
      // eslint-disable-next-line max-len
      dis = prices[0].discounted
        ? (((prices[0].discounted.value.centAmount as number) / 100).toFixed(2) as string)
        : undefined;
      catalog.innerHTML += ProductItem(name, firstImg, price, description, productID, dis);
    }
    disableBasketBtnLinkingInfo();
  });

  setPagination();
  setRedButton();
};

export default setCatalog;
