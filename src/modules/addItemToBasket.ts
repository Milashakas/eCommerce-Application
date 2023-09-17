// Controllers
import updateUserCartData from "../controllers/updateUserCartData";

const addItemToBasket = () => {
  const productsList = document.querySelector(".catalog-products-list") as HTMLDivElement;

  productsList.addEventListener("click", async (event: Event) => {
    const target: Element = event.target as Element;

    if (target.closest(".product-block-busket-button")) {
      const addBtn = target.closest(".product-block-busket-button") as Element;
      const itemID = addBtn.parentElement?.parentElement?.id as string;

      await updateUserCartData({ action: "addLineItem", productID: itemID });
    }
  });
};

export default addItemToBasket;
