import { LineItem } from "@commercetools/platform-sdk";

// Components
import BasketItem from "../components/BasketItem";
import EmptyCartMessage from "../components/EmptyCartMessage";

// Utils
import { getCurrentLocationPath } from "../utils/getCurrentLocationPath";

// Interfaces
import { ICartItemData } from "../interfaces/ICart";

// Modules
import modifyCartItem from "./modifyCartItem";

// Store
import store from "../redux/createStore";

const setTotalPriceValue = () => {
  const totalPrice = store.getState().cart?.totalPrice as number;
  const totalPriceValue = document.querySelector(".basket-total-price") as HTMLSpanElement;

  totalPriceValue.innerHTML = `Total price: ${(totalPrice / 100).toFixed(2)} EUR`;
};

const setBasketProductsList = () => {
  const currentPath = getCurrentLocationPath();

  if (currentPath !== "/basket") return;

  const basketItems = store.getState().cart?.cartItems as LineItem[];
  const basketList = document.querySelector(".basket-item-list") as HTMLDivElement;

  if (!basketItems) return;

  basketList.innerHTML = "";

  if (!basketItems.length) {
    basketList.innerHTML = EmptyCartMessage();
    setTotalPriceValue();
    return;
  }

  basketItems.forEach((item: LineItem) => {
    const imageLink = item.variant.images ? item.variant.images[0].url : "...";

    const itemData: ICartItemData = {
      name: item.name["en-US"],
      price: (item.price.value.centAmount / 100).toFixed(2),
      totalPrice: item.totalPrice.centAmount.toFixed(2),
      imageLink,
      id: item.id,
      quantity: item.quantity,
      discountPrice: ((item.price.discounted?.value.centAmount as number) / 100).toFixed(2),
    };

    basketList.innerHTML += BasketItem(itemData);
  });

  setTotalPriceValue();
  modifyCartItem();
};

export default setBasketProductsList;
