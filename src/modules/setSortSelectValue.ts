import store from "../redux/createStore";

const setSortSelectValue = () => {
  // eslint-disable-next-line no-undef
  const sortSelectOptions: NodeListOf<HTMLOptionElement> = document.querySelectorAll(".orderBy option");
  const { sortValue } = store.getState().catalog;

  sortSelectOptions.forEach((option: HTMLOptionElement) => {
    option.removeAttribute("selected");
    if (sortValue === option.dataset.sort) {
      option.setAttribute("selected", "");
    }
  });
};

export default setSortSelectValue;
