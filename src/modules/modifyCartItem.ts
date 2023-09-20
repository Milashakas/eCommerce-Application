// Controllers
import updateUserCartData from "../controllers/updateUserCartData";
import setCount from "../components/getCountCart";

const removeItem = async (target: Element) => {
  const itemID = target.parentElement?.id as string;
  setCount();
  await updateUserCartData({
    action: "removeLineItem",
    productID: itemID,
  });
};

const changeItemQuantity = async (target: Element) => {
  const pressedBtn = target as HTMLInputElement;
  const itemID = pressedBtn.parentElement?.parentElement?.id as string;
  const currentValue = +(pressedBtn.parentElement?.children[1] as HTMLInputElement).value;
  const newValue = pressedBtn.value === "+" ? currentValue + 1 : currentValue - 1;

  setCount();
  if (!newValue) return;

  await updateUserCartData({
    action: "changeLineItemQuantity",
    productID: itemID,
    quantity: newValue,
  });
};

const modifyCartItemAction = async (event: Event) => {
  const target: Element = event.target as Element;

  if (target.closest(".plus") || target.closest(".minus")) {
    await changeItemQuantity(target);
  }
  if (target.closest(".basket-remove-button")) {
    await removeItem(target);
  }
};

const modifyCartItem = () => {
  const basketItemList = document.querySelector(".basket-item-list") as HTMLDivElement;

  basketItemList.addEventListener("click", modifyCartItemAction);
};

export default modifyCartItem;
