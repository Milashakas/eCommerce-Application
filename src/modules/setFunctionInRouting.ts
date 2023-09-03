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
import setCatalog from "../controllers/setCatalog";
import setProductsListAsyncAction from "../redux/asyncActions/setProductsListAsyncAction";
import setPriceRangeFilter from "../controllers/setPriceRangeFilter";
import setSortSelectValue from "./setSortSelectValue";
import sortCatalog from "../controllers/sortCatalog";

// productPage functional
import setProductPageAsyncLayout from "./setProductPageAsyncLayout";
import setSwiper from "./swiper";
import toggleInactivePrice from "./toggleInactivePrice";
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
    setCatalog();
    setSortSelectValue();
    openedMenu();
    setPriceRangeFilter();
    sortCatalog();
  } else if (url === "/product") {
    // just to see the result
    await setProductPageAsyncLayout();
    setSwiper();
    toggleInactivePrice();
  }
};

export default runFunctionInRouting;
