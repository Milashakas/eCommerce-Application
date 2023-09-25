import { ICatalogData, IFilterData } from "../interfaces/IRedux";
import store from "../redux/createStore";
import { setCatalogFilterData, setCatalogSortData } from "../redux/actions";
import setProductsListAsyncAction from "../redux/asyncActions/setProductsListAsyncAction";
import setCatalog from "./setCatalog";

const checkIsFilterPriceRange = () => {
  const DEFAULT_MAX_PRICE = 50000;
  const priceRange = store.getState().catalog.filterData?.priceRange;

  if (priceRange) return;

  const priceRangeData: IFilterData = {
    priceRange: {
      low: 0,
      high: DEFAULT_MAX_PRICE,
    },
  };

  store.dispatch(setCatalogFilterData(priceRangeData));
};

const sortCatalog = () => {
  const sortSelect: HTMLSelectElement = document.querySelector(".orderBy") as HTMLSelectElement;

  sortSelect.addEventListener("change", async () => {
    const currentOption = document.querySelector(`.orderBy [value="${sortSelect.value}"]`) as HTMLOptionElement;
    const dataValue = currentOption.dataset.sort as ICatalogData["sortValue"];

    checkIsFilterPriceRange();
    store.dispatch(setCatalogSortData(dataValue));
    await setProductsListAsyncAction();
    setCatalog();
  });
};

export default sortCatalog;
