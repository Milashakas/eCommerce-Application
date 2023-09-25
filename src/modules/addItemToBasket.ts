// Controllers
import updateUserCartData from "../controllers/updateUserCartData";

const addItemToBasket = () => {
  const productsList = document.querySelector(".catalog-products-list") as HTMLDivElement;
  const count = document.querySelector(".basket-count") as HTMLSpanElement;
  productsList.addEventListener("click", async (event: Event) => {
    const target: Element = event.target as Element;
    if (target.closest(".product-block-busket-button")) {
      const addBtn = target.closest(".product-block-busket-button") as HTMLButtonElement;
      if (addBtn.innerHTML === "PRODUCT IN CART") {
        return;
      }
      if (count) {
        count.innerHTML = `${Number(count?.innerHTML) + 1}`;
      }
      const itemID = addBtn.parentElement?.parentElement?.id as string;
      await updateUserCartData({ action: "addLineItem", productID: itemID });
      addBtn.innerHTML = "PRODUCT IN CART";
      addBtn.classList.add("product-block-busket-button-red");
      addBtn.classList.remove("product-block-busket-button");
    }
  });
};

export default addItemToBasket;
