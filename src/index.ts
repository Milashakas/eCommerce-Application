import "./assets/styles/normalize.scss";
import "./assets/styles/style.scss";
import "./assets/styles/styleHeadFoot.scss";
import "./assets/styles/styleMain.scss";
import "./assets/styles/404.scss";
import mainPage from "./pages/Main";
import setBasicLayout from "./modules/BasicLayout";
import headerEvents from "./components/headerEvents";
import footerEvents from "./components/footerEvents";
import errorPage from "./pages/404";

const router = async () => {
  const routes = [
    { path: "/404", view: errorPage() },
    { path: "/", view: mainPage() },
    { path: "/hair", view: "<div>hair</div>" },
    { path: "/login", view: "<div>login</div>" },
    { path: "/signup", view: "<div>signup</div>" },
  ];

  const potentialMatches = routes.map((root) => (
    {
      route: root,
      isMatch: window.location.pathname === root.path,
    }
  ));

  let match = potentialMatches.find((potentialMatche) => potentialMatche.isMatch);
  if (!match) { // главная стр по дефолту
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  const main = document.querySelector("main") as HTMLBodyElement;
  main.innerHTML = match.route.view;
  console.log(match.route.view);
};

const navigateTo = (url:string) => {
  window.history.pushState(null, "", url);
  router();
};

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
