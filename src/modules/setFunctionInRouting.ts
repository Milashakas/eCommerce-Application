import initSameShippingListener from "./setShippingAddressData";
import togglePasswordVisibility from "./togglePasswordVisibility";
import validateEmail from "./validateEmail";
import validatePassword from "./validatePassword";
import validateNames from "./validateNames";
import validateDOB from "./validateBirthDate";
import validateBillingAddress from "./validateBillingAddress";

const runFunctionInRouting = (url: string) => {
  if (url === "/signup") {
    initSameShippingListener();
    togglePasswordVisibility();
    validateNames();
    validateDOB();
    validateEmail();
    validatePassword();
    validateBillingAddress();
  } else if (url === "/login") {
    validateEmail();
    validatePassword();
    togglePasswordVisibility();
  }
};

export default runFunctionInRouting;
