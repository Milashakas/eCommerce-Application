import { ICartItemData } from "../interfaces/ICart";

const BasketItem = (itemData: ICartItemData) => {
  const totalItemPrice = (+itemData.totalPrice / 100).toFixed(2);

  const view = `
  <div class="basket-item" id="${itemData.id}">
    <img class="basket-item-img" src="${itemData.imageLink}"></img>
    <span class="basket-item-name">${itemData.name}</span>
    <span class="basket-item-price">${itemData.price} EUR</span>
    <div class="quantity">
      <input type="button" value="-" class="minus">
      <input type="number" id="quantity_${itemData.id}" class="item-quantity" value="1" min="0" max="100" step="1" placeholder="" inputmode="numeric" autocomplete="off">
      <input type="button" value="+" class="plus">
    </div>
    <span class="basket-item-total-price">${totalItemPrice} EUR</span>
    <button type="submit" class="basket-remove-button">Remove from Cart</button>
  </div>
  <div class="basket-item-line"></div>
  `;

  return view;
};

export default BasketItem;
