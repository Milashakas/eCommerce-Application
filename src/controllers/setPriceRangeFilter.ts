import { setCatalogFilterData, resetCatalogFilterData } from "../redux/actions";
import setProductsListAsyncAction from "../redux/asyncActions/setProductsListAsyncAction";
import setCatalog from "./setCatalog";
import { IFilterData } from "../interfaces/IRedux";
import store from "../redux/createStore";

const CENT_PER_EURO = 100;

const setFilterAction = async () => {
  const minPriceInput: HTMLInputElement = document.querySelector(".filter-price-input-min") as HTMLInputElement;
  const maxPriceInput: HTMLInputElement = document.querySelector(".filter-price-input-max") as HTMLInputElement;

  const minPriceValue = +minPriceInput.value * CENT_PER_EURO;
  const maxPriceValue = +maxPriceInput.value * CENT_PER_EURO;

  const filterData: IFilterData = {
    priceRange: {
      low: minPriceValue,
      high: maxPriceValue,
    },
  };

  store.dispatch(setCatalogFilterData(filterData));
  await setProductsListAsyncAction();
  setCatalog();
};

const setPriceRangeFilter = () => {
  const applyBtn: HTMLButtonElement = document.querySelector(".filter-price-button") as HTMLButtonElement;
  const resetBtn: HTMLButtonElement = document.querySelector(".reset-filter-price-button") as HTMLButtonElement;

  applyBtn.addEventListener("click", setFilterAction);

  resetBtn.addEventListener("click", async () => {
    store.dispatch(resetCatalogFilterData({ isResetPrice: true }));
    await setProductsListAsyncAction();
    setCatalog();
  });
};

export default setPriceRangeFilter;
