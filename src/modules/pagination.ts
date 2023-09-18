import setProductsListAsyncAction from "../redux/asyncActions/setProductsListAsyncAction";
import setCatalog from "../controllers/setCatalog";

const setPagination = () => {
  const left = document.querySelector(".leftPagination") as HTMLElement;
  const right = document.querySelector(".rightPagination") as HTMLElement;
  const current = document.querySelector(".currentPage") as HTMLParagraphElement;
  // const all = document.querySelector(".currentPage") as HTMLParagraphElement;
  const rightPag = async () => {
    if (current.innerHTML === "4") {
      return;
    }
    if (current.innerHTML === "1") {
      current.innerHTML = "2";
      await setProductsListAsyncAction(9);
      setCatalog();
    } else if (current.innerHTML === "2") {
      current.innerHTML = "3";
      await setProductsListAsyncAction(18);
      setCatalog();
    } else if (current.innerHTML === "3") {
      current.innerHTML = "4";
      await setProductsListAsyncAction(27);
      setCatalog();
    }
  };
  const leftPag = async () => {
    if (current.innerHTML === "1") {
      return;
    }
    if (current.innerHTML === "2") {
      current.innerHTML = "1";
      await setProductsListAsyncAction(0);
      setCatalog();
    } else if (current.innerHTML === "3") {
      current.innerHTML = "2";
      await setProductsListAsyncAction(9);
      setCatalog();
    } else if (current.innerHTML === "4") {
      current.innerHTML = "3";
      await setProductsListAsyncAction(18);
      setCatalog();
    }
  };
  right.addEventListener("click", rightPag);
  left.addEventListener("click", leftPag);
};

export default setPagination;
