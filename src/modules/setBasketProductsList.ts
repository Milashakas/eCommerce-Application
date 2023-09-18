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
  const state = store.getState();
  const totalPrice = state.cart?.totalPrice as number;
  const discountCode = state.cart?.discountCode;
  const price = (totalPrice / 100).toFixed(2);
  let priceValue = "";

  if (discountCode) {
    const originalPrice = (((totalPrice / 100) * 100) / 90).toFixed(2);
    priceValue = `Total Price: <span class="crossedText">${originalPrice}</span>   ${price} EUR`;
  } else {
    priceValue = `Total Price: ${price} EUR`;
  }

  const totalPriceValue = document.querySelector(".basket-total-price") as HTMLSpanElement;
  totalPriceValue.innerHTML = "";

  totalPriceValue.innerHTML = priceValue;
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
