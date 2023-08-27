import "./assets/styles/index.scss";
import headerOpenMenuFunctional from "./modules/headerEvents";
import footerOpenLinksFunctional from "./modules/footerEvents";
import setBasicLayout from "./modules/SetBasicLayout";
import { router, navigateTo } from "./router";
import autoLogIn from "./controllers/autoLogIn";

setBasicLayout();
headerOpenMenuFunctional();
footerOpenLinksFunctional();
autoLogIn();

// window.addEventListener("load", router);
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      navigateTo(link.href);
    });
  });
  router();
});
