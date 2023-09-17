// Components
import WelcomeSection from "../components/common/WelcomeSection";

const basketPage = () => {
  const code = `
    ${WelcomeSection("Basket")}

    <div class="basket-item-list"></div>
    <p class="basket-total-price"></p>
    `;
  return code;
};
export default basketPage;
