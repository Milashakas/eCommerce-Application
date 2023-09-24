import store from "../redux/createStore";
// Components
import PaginationBtn from "../components/PaginationBtn";

// Async action
import setProductsListAsyncAction from "../redux/asyncActions/setProductsListAsyncAction";

// controllers
import setCatalog from "./setCatalog";

const DISPLAYED_ITEMS_VALUE = 9;

const setAnotherPage = (paginationLine: HTMLDivElement) => {
  const allPaginationBtns = document.querySelectorAll(".catalog-pagination .pagination-btn");

  allPaginationBtns.forEach((paginationItem) => {
    paginationItem.addEventListener("click", async () => {
      const storeCorrectOffset = +paginationItem.id;

      if (paginationItem.classList.contains("active-pagination-btn")) return;

      await setProductsListAsyncAction(storeCorrectOffset);
      // eslint-disable-next-line no-param-reassign
      paginationLine.innerHTML = "";
      setCatalog();
    });
  });
};

const setPagination = () => {
  const paginationLine = document.querySelector(".catalog-pagination") as HTMLDivElement;
  const totalItems: number = store.getState().catalog.total as number;
  const pagesAmount: number = Math.ceil(totalItems / DISPLAYED_ITEMS_VALUE);

  const currentOffset: number = store.getState().catalog.offset as number;

  for (let i = 0; i < pagesAmount; i += 1) {
    const correctPageValue = i + 1;
    paginationLine.innerHTML += PaginationBtn(correctPageValue, currentOffset);
  }

  setAnotherPage(paginationLine);
};

export default setPagination;
