import "./assets/styles/normalize.scss";
import "./assets/styles/style.scss";
import "./assets/styles/styleHeadFoot.scss";
import "./assets/styles/styleMain.scss";
import "./assets/styles/404.scss";
import setBasicLayout from "./modules/SetBasicLayout";
import headerEvents from "./components/headerEvents";
import footerEvents from "./components/footerEvents";
import { router } from "./router";

setBasicLayout();
headerEvents();
footerEvents();

document.addEventListener("DOMContentLoaded", () => {
  router();
});
window.addEventListener("load", router);
window.addEventListener("popstate", router);
