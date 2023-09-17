import { LineItem } from "@commercetools/platform-sdk";

// Components
import BasketItem from "../components/BasketItem";

// Utils
import { getCurrentLocationPath } from "../utils/getCurrentLocationPath";

// Interfaces
import { ICartItemData } from "../interfaces/ICart";

// Store
import store from "../redux/createStore";

const setBasketProductsList = () => {
  const currentPath = getCurrentLocationPath();
  console.log(currentPath);
  if (currentPath !== "/basket") return;
  console.log("BAKET PAGES");

  const basketItems = store.getState().cart?.cartItems as LineItem[];
  const basketList = document.querySelector(".basket-item-list") as HTMLDivElement;
  if (!basketItems) return;

  basketList.innerHTML = "";

  basketItems.forEach((item: LineItem) => {
    const imageLink = item.variant.images ? item.variant.images[0].url : "...";

    const itemData: ICartItemData = {
      name: item.name["en-US"],
      price: (item.price.value.centAmount / 100).toFixed(2),
      totalPrice: item.totalPrice.centAmount.toFixed(2),
      imageLink,
      id: item.id,
      quantity: item.quantity,
    };

    basketList.innerHTML += BasketItem(itemData);
  });
};

export default setBasketProductsList;
