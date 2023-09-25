import { Cart, LineItem, DiscountCodeReference } from "@commercetools/platform-sdk";

interface ICartRequestData {
  id: string | null;
  cartType: "authUser" | "anonymous ";
}

interface ICartData {
  cartID: string;
  cartVersion: number;
  cartItems: LineItem[];
  totalPrice: number;
  discountCode?: DiscountCodeReference;
}

interface ICartResponseData {
  cartData?: Cart;
  message?: string;
  statucCode?: number;
}

interface IUpdateCartdata {
  action: "addLineItem" | "removeLineItem" | "changeLineItemQuantity" | "addDiscountCode" | "removeDiscountCode";
  productID?: string;
  quantity?: number;
  code?: string;
}

interface ICartItemData {
  id: string;
  quantity: number;
  name: string;
  imageLink: string;
  price: string;
  discountPrice: string;
  totalPrice: string;
}

export { ICartRequestData, ICartResponseData, IUpdateCartdata, ICartData, ICartItemData };
