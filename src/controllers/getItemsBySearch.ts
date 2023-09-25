// Store
import store from "../redux/createStore";
// Actions
import { setCatalogFilterData } from "../redux/actions";
// Async Actions
import setProductsListAsyncAction from "../redux/asyncActions/setProductsListAsyncAction";
// modules
import setCatalog from "./setCatalog";

const getItemsBySearch = () => {
  const searchInput = document.querySelector(".searchForm input") as HTMLInputElement;
  const searchBtn = document.querySelector(".searchForm button") as HTMLButtonElement;

  searchBtn.addEventListener("click", async () => {
    const searchText = searchInput.value.trim();
    if (!searchText) return;

    store.dispatch(setCatalogFilterData({ searchText: searchText as string }));

    await setProductsListAsyncAction();
    setCatalog();
  });
};

export default getItemsBySearch;
