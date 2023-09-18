// Controllers
import updateUserCartData from "../controllers/updateUserCartData";

const changeQuantityAction = async (event: Event) => {
  const target: Element = event.target as Element;

  if (target.closest(".plus") || target.closest(".minus")) {
    const pressedBtn = target as HTMLInputElement;
    const itemID = pressedBtn.parentElement?.parentElement?.id as string;
    const currentValue = +(pressedBtn.parentElement?.children[1] as HTMLInputElement).value;
    const newValue = pressedBtn.value === "+" ? currentValue + 1 : currentValue - 1;

    if (!newValue) return;

    await updateUserCartData({
      action: "changeLineItemQuantity",
      productID: itemID,
      quantity: newValue,
    });
  }
};

const changeCartItemQuantity = () => {
  const basketItemList = document.querySelector(".basket-item-list") as HTMLDivElement;

  basketItemList.addEventListener("click", changeQuantityAction);
};

export default changeCartItemQuantity;
