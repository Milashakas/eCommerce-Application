import updateUserCartData from "../controllers/updateUserCartData";

const handleRemoveItemFromBasket = () => {
  const removeButton = document.querySelector(".cart-remove-button") as HTMLButtonElement;

  removeButton?.addEventListener("click", async () => {
    const itemID = removeButton.getAttribute("id") as string;
    await updateUserCartData({ action: "removeLineItem", productID: itemID });

    const basketCountElement = document.querySelector(".basket-count");
    const currentCount = parseInt(basketCountElement?.innerHTML || "0", 10);

    if (currentCount > 0) {
      basketCountElement!.innerHTML = (currentCount - 1).toString();
    }

    const cartButton = document.querySelector(".cart-button") as HTMLButtonElement;
    if (cartButton) {
      cartButton.classList.remove("inactive");
      cartButton.removeAttribute("disabled");
    }

    removeButton.classList.add("inactive");
    removeButton.setAttribute("disabled", "disabled");
  });
};

const handleAddingItemsToBasket = () => {
  const cartButton = document.querySelector(".cart-button") as HTMLButtonElement;

  cartButton?.addEventListener("click", async () => {
    const itemID = cartButton.getAttribute("id") as string;
    await updateUserCartData({ action: "addLineItem", productID: itemID });

    const basketCountElement = document.querySelector(".basket-count");
    const currentCount = parseInt(basketCountElement?.innerHTML || "0", 10);
    basketCountElement!.innerHTML = (currentCount + 1).toString();

    const removeButton = document.querySelector(".cart-remove-button") as HTMLButtonElement;
    if (removeButton) {
      removeButton!.style.display = "block";
      removeButton!.classList.remove("inactive");
      removeButton!.removeAttribute("disabled");
    }

    cartButton.classList.add("inactive");
    cartButton.setAttribute("disabled", "disabled");
  });

  handleRemoveItemFromBasket();
};

export default handleAddingItemsToBasket;
