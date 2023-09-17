import { ICartItemData } from "../interfaces/ICart";

const BasketItem = (itemData: ICartItemData) => {
  console.log(itemData);
  const view = `
  <div class="basket-item" id="${itemData.id}">
    <img class="basket-item-img" src="${itemData.imageLink}"></img>
    <span class="basket-item-name">${itemData.name}</span>
    <span class="basket-item-price">${itemData.price} EUR</span>
    <button type="submit" class="basket-remove-button">Remove from Cart</button>
  </div>
  <div class="basket-item-line"></div>
  `;

  return view;
};

export default BasketItem;
