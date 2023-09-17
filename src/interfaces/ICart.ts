import { Cart } from "@commercetools/platform-sdk";

interface ICartRequestData {
  id: string | null;
  cartType: "authUser" | "anonymous ";
}

interface ICartResponseData {
  cartData?: Cart;
  message?: string;
  statucCode?: number;
}

export { ICartRequestData, ICartResponseData };
