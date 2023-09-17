import { Cart, LineItem } from "@commercetools/platform-sdk";

interface ICartRequestData {
  id: string | null;
  cartType: "authUser" | "anonymous ";
}

interface ICartData {
  cartID: string;
  cartVersion: number;
  cartItems: LineItem[];
}

interface ICartResponseData {
  cartData?: Cart;
  message?: string;
  statucCode?: number;
}

interface IUpdateCartdata {
  action: "addLineItem" | "removeLineItem";
  productID: string;
}

interface ICartItemData {
  id: string;
  quantity: number;
  name: string;
  imageLink: string;
  price: string;
  totalPrice: string;
}

export { ICartRequestData, ICartResponseData, IUpdateCartdata, ICartData, ICartItemData };
