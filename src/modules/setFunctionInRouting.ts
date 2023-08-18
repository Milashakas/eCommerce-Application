import initSameShippingListener from "./setShippingAddressData";
import togglePasswordVisibility from "./togglePasswordVisibility";
import validateEmail from "./validateEmail";
import validatePassword from "./validatePassword";

const runFunctionInRouting = (url:string) => {
  if (url === "/signup") {
    initSameShippingListener();
    togglePasswordVisibility();
    validateEmail();
    validatePassword();
  }
};

export default runFunctionInRouting;
