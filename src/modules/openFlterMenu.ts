const openedCloseMenu = () => {
  const button = document.querySelector(".catalog-header-wripper") as HTMLElement;
  const filterMenu = document.querySelector(".catalog-section-filter") as HTMLElement;
  const closeButton = document.querySelector(".catalog-burger-close-button") as HTMLElement;

  closeButton.addEventListener("click", () => {
    filterMenu.classList.remove("catalog-section-filter-opened");
  });
  button.addEventListener("click", () => {
    filterMenu.classList.add("catalog-section-filter-opened");
  });
};

export default openedCloseMenu;
