import { setCatalogFilterData } from "../redux/actions";
import setProductsListAsyncAction from "../redux/asyncActions/setProductsListAsyncAction";
import setCatalog from "./setCatalog";
import { IFilterData } from "../interfaces/IRedux";
import store from "../redux/createStore";

const CENT_PER_EURO = 100;

const setPriceRangeFilter = () => {
  const applyBtn: HTMLButtonElement = document.querySelector(".filter-price-button") as HTMLButtonElement;

  applyBtn.addEventListener("click", async () => {
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
  });
};

export default setPriceRangeFilter;
