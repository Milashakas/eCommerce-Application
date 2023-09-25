import "./assets/styles/index.scss";
import headerOpenMenuFunctional from "./modules/headerEvents";
import footerOpenLinksFunctional from "./modules/footerEvents";
import setBasicLayout from "./modules/SetBasicLayout";
import { router, navigateTo } from "./router";
import autoLogInAsyncAction from "./redux/asyncActions/autoLogInAsyncAction";
import resetStateAfterLink from "./controllers/resetStateAfterLink";
import setCount from "./components/getCountCart";

setBasicLayout();
headerOpenMenuFunctional();
footerOpenLinksFunctional();
autoLogInAsyncAction();
resetStateAfterLink();
setCount();

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
