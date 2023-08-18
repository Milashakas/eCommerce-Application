// import { ApiRoot } from "@commercetools/platform-sdk";
import "./assets/styles/normalize.scss";
import "./assets/styles/style.scss";
import "./assets/styles/styleHeadFoot.scss";
import "./assets/styles/styleMain.scss";
<<<<<<< HEAD
import setBasicLayout from "./pages/BasicLayout";
// import initSameShippingListener from "./modules/setShippingAddressData";
// import togglePasswordVisibility from "./modules/togglePasswordVisibility";
// import insertRegistrationFormIntoMain from "./pages/Registration";
// import validateEmail from "./modules/validateEmail";
// import validatePassword from "./modules/validatePassword";

setBasicLayout();
=======
import "./assets/styles/404.scss";
import headerOpenMenuFunctional from "./modules/headerEvents";
import footerOpenLinksFunctional from "./modules/footerEvents";
import setBasicLayout from "./modules/SetBasicLayout";
import { router } from "./router";

setBasicLayout();
headerOpenMenuFunctional();
footerOpenLinksFunctional();

document.addEventListener("DOMContentLoaded", () => {
  router();
});
window.addEventListener("load", router);
window.addEventListener("popstate", router);
>>>>>>> login-registration-main
