import "./assets/styles/normalize.scss";
import "./assets/styles/style.scss";
import "./assets/styles/styleHeadFoot.scss";
import "./assets/styles/styleMain.scss";
import "./assets/styles/404.scss";
import "./assets/styles/popupNotification.scss";
import headerOpenMenuFunctional from "./modules/headerEvents";
import footerOpenLinksFunctional from "./modules/footerEvents";
import setBasicLayout from "./modules/SetBasicLayout";
import { router } from "./router";
import autoLogIn from "./controllers/autoLogIn";

setBasicLayout();
headerOpenMenuFunctional();
footerOpenLinksFunctional();
autoLogIn();

document.addEventListener("DOMContentLoaded", () => {
  router();
});
window.addEventListener("load", router);
window.addEventListener("popstate", router);
