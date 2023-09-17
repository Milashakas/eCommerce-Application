import { ICartItemData } from "../interfaces/ICart";

const BasketItem = (itemData: ICartItemData) => {
  const view = `

  <h1>${itemData.quantity}</h1>
  <h2>${itemData.id}</h2>
  `;

  return view;
};

export default BasketItem;
