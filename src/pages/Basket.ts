// Components
import WelcomeSection from "../components/common/WelcomeSection";

const basketPage = () => {
  const code = `
    ${WelcomeSection("Basket")}
    <div class="promotion-info">Fantastic Offer For Our Clients During Autumn 2023! Get 10% OFF For Everything Using Our Special Discount Code: AUTUMNSALECODE</div>
    <div class="basket-item-list"></div>
    <div class="coupon">
      <input type="text" name="coupon_code" class="coupon-code" id="coupon_code" value="" placeholder="Add Your Discount Code">
      <button type="submit" class="code-button" name="apply_coupon" value="Apply code">
      Apply discount</button>
    </div>
    <p class="basket-total-price"></p>

    `;
  return code;
};
export default basketPage;
