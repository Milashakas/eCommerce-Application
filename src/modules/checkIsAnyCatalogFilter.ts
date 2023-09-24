import store from "../redux/createStore";

const checkIsAnyCatalogFilter = (): boolean => {
  let isAnyFilter = false;
  const { filterData } = store.getState().catalog;

  if (!filterData) return isAnyFilter;

  if (filterData.category || filterData.priceRange || filterData.searchText) isAnyFilter = true;

  return isAnyFilter;
};

export default checkIsAnyCatalogFilter;
