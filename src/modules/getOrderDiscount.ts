import updateUserCart from "../api/updateUserCart";

// Interfaces
import { ICartResponseData } from "../interfaces/ICart";

// Modules
import getUserCart from "../controllers/getUserCart";

const getOrderDiscount = () => {
  const btn = document.querySelector(".code-button") as HTMLDivElement;

  btn.addEventListener("click", async () => {
    const discountInput = document.querySelector(".coupon-code") as HTMLInputElement;
    const discountValue = discountInput.value.trim();

    if (!discountValue) return;

    const response: ICartResponseData = await updateUserCart({
      action: "addDiscountCode",
      code: discountValue,
    });

    const statucCode = response.statucCode as number;
    discountInput.value = "";
    if (statucCode === 200) {
      await getUserCart();
    }
  });
};

export default getOrderDiscount;
