// registrationPage functional
import initSameShippingListener from "./setShippingAddressData";
import togglePasswordVisibility from "./togglePasswordVisibility";
import validateEmail from "./validateEmail";
import validatePassword from "./validatePassword";
import createCustomerProfile from "../controllers/createCustomerProfile";

const runFunctionInRouting = (url: string) => {
  if (url === "/signup") {
    initSameShippingListener();
    togglePasswordVisibility();
    validateEmail();
    validatePassword();
    createCustomerProfile();
  }
};

export default runFunctionInRouting;
