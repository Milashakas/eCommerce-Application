// Components
import WelcomeSection from "../components/common/WelcomeSection";

const basketPage = () => {
  const code = `
    ${WelcomeSection("Basket")}

    <div class="basket-item-list"></div>
    <p class="basket-total-price">
      Total price: <span class="basket-total-price-value"></span> EUR
    </p>
    `;
  return code;
};
export default basketPage;
