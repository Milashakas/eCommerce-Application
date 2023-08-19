import initSameShippingListener from "./setShippingAddressData";
import togglePasswordVisibility from "./togglePasswordVisibility";
import validateEmail from "./validateEmail";
import validatePassword from "./validatePassword";
import validateNames from "./validateNames";
import validateDOB from "./validateBirthDate";
import validateBillingAddress from "./validateBillingAddress";
// import setBodyBackground from "./changeBg";

const runFunctionInRouting = (url: string) => {
  if (url === "/signup") {
    // setBodyBackground();
    initSameShippingListener();
    togglePasswordVisibility();
    validateNames();
    validateDOB();
    validateEmail();
    validatePassword();
    validateBillingAddress();
  } else if (url === "/login") {
    // setBodyBackground();
    validateEmail();
    validatePassword();
    togglePasswordVisibility();
  }
};

export default runFunctionInRouting;
