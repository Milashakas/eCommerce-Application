// registrationPage functional
import initSameShippingListener from "./setShippingAddressData";
import togglePasswordVisibility from "./togglePasswordVisibility";
import validateEmail from "./validateEmail";
import validatePassword from "./validatePassword";
import createCustomerProfile from "../controllers/createCustomerProfile";
// login functional
import logIn from "../controllers/logIn";

const runFunctionInRouting = (url: string) => {
  if (url === "/signup") {
    initSameShippingListener();
    togglePasswordVisibility();
    validateEmail();
    validatePassword();
    createCustomerProfile();
  } else if (url === "/login") {
    logIn();
  }
};

export default runFunctionInRouting;
