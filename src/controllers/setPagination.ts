import store from "../redux/createStore";

// Components
// import PaginationBtn from "../components/PaginationBtn";

const setPagination = () => {
  // const paginationLine = document.querySelector(".catalog-pagination") as HTMLDivElement;
  console.log("HELLO, SUKKO");
  console.log(store.getState().catalog.total);
};

export default setPagination;
