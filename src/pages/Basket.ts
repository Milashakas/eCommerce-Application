// Components
import WelcomeSection from "../components/common/WelcomeSection";

const basketPage = () => {
  const code = `
    ${WelcomeSection("Basket")}

    <div class="basket-item-list"></div>
    <p class="basket-total-cost">00.00 EUR</p>
    `;
  return code;
};
export default basketPage;
