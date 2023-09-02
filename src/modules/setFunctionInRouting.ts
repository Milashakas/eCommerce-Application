// registrationPage and loginPage functional
import initSameShippingListener from "./setShippingAddressData";
import togglePasswordVisibility from "./togglePasswordVisibility";
import validateNames from "./validateNames";
import validateDOB from "./validateBirthDate";
import validateEmail from "./validateEmail";
import validatePassword from "./validatePassword";
import validateBillingAddress from "./validateBillingAddress";
import validateRegistrationForm from "./validateRegFormOnSubmit";
import handleShippingAddressValidation from "./validateShippingAddress";
import validateLoginForm from "./validateLoginFormOnSubmit";
// catalogPage functional
import setCatalog from "./setCatalog";
import setProductsListAsyncAction from "../redux/asyncActions/setProductsListAsyncAction";
// productPage functional
import setSwiper from "./swiper";
import openedMenu from "./openFlterMenu";

const runFunctionInRouting = async (url: string) => {
  if (url === "/signup") {
    initSameShippingListener();
    togglePasswordVisibility();
    validateNames();
    validateDOB();
    validateEmail();
    validatePassword();
    validateBillingAddress();
    validateRegistrationForm();
    handleShippingAddressValidation();
  } else if (url === "/login") {
    validateEmail();
    validatePassword();
    togglePasswordVisibility();
    validateLoginForm();
  } else if (url === "/catalog") {
    await setProductsListAsyncAction();
    await setCatalog();
    openedMenu();
  } else if (url === "/orderInformation") {
    // just to see the result
    setSwiper();
  } else if (url === "/catalog/:id") {
    setSwiper();
  }
};

export default runFunctionInRouting;
