import "./assets/styles/normalize.scss";
import "./assets/styles/style.scss";
import "./assets/styles/styleHeadFoot.scss";
import "./assets/styles/styleMain.scss";
import "./assets/styles/404.scss";
import setBasicLayout from "./modules/BasicLayout";
import headerEvents from "./components/headerEvents";
import footerEvents from "./components/footerEvents";
import { router, navigateTo } from "./router";
import mainPage from "./pages/Main";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body") as HTMLBodyElement;
  body.innerHTML = setBasicLayout(mainPage());
  const links = document.querySelectorAll("a");
  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const link = e.target as HTMLAnchorElement;
      console.log(`PRPR ${link.href}`);
      navigateTo(link.href);
    });
  });
  router();
  headerEvents();
  footerEvents();
});

window.addEventListener("load", router);

window.addEventListener("popstate", router);
