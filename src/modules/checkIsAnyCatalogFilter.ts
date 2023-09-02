import { IFilterData, IFilterPriceRange } from "../interfaces/IRedux";
import store from "../redux/createStore";

const checkIsAnyCatalogFilter = (): boolean => {
  let isAnyFilter = false;
  const { filterData } = store.getState().catalog;
  if (!filterData) return isAnyFilter;

  Object.keys(filterData).forEach((objKey) => {
    const key: keyof IFilterData = objKey as keyof IFilterData;

    if (typeof filterData[key] === "object") {
      const priceRange: IFilterPriceRange = filterData[key] as IFilterPriceRange;

      Object.keys(priceRange).forEach((priceRangeKey) => {
        const innerKey: keyof IFilterPriceRange = priceRangeKey as keyof IFilterPriceRange;
        if (!priceRange[innerKey]) {
          delete filterData.priceRange;
        }
      });
    }

    if (!filterData[key]) delete filterData[key];
  });

  isAnyFilter = !!Object.keys(filterData).length;

  return isAnyFilter;
};

export default checkIsAnyCatalogFilter;
