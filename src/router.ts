import mainPage from "./pages/Main";
import errorPage from "./pages/404";
import RegistrationForm from "./pages/Registration";
import LoginForm from "./pages/Login";
import runFunctionInRouting from "./modules/setFunctionInRouting";
import catalogPage from "./pages/Catalog";
import brandsPage from "./pages/Brands";
import hairPage from "./pages/Hair";
import bodyPage from "./pages/Body";
import salePage from "./pages/Sale";
import facePage from "./pages/Face";
import aboutUsPage from "./pages/AboutUs";
import basketPage from "./pages/Basket";
// import orderInformationPage from "./pages/OrderInfo";
import ProductPage from "./pages/Product";
import deliveryPage from "./pages/Delivery";
import returnPage from "./pages/Return";
import brandsFilter from "./pages/BrandsFilter";
import setListenerForLinks from "./modules/functionForLinks";
// import product from "./modules/productBlock";

const pathToRegex = (path: string) => new RegExp(`^${path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)")}$`);

const getMatch = () => {
  console.log(pathToRegex("/posts/:id"));
  const routes = [
    { path: "/404", view: errorPage() },
    { path: "/", view: mainPage() },
    { path: "/catalog/:id", view: ProductPage() },
    { path: "/login", view: LoginForm() },
    { path: "/signup", view: RegistrationForm() },
    { path: "/catalog", view: catalogPage() },
    { path: "/brands", view: brandsPage() },
    { path: "/hair", view: hairPage() },
    { path: "/body", view: bodyPage() },
    { path: "/face", view: facePage() },
    { path: "/sale", view: salePage() },
    { path: "/aboutus", view: aboutUsPage() },
    { path: "/basket", view: basketPage() },
    { path: "/delivery", view: deliveryPage() },
    { path: "/return", view: returnPage() },
    { path: "/filter", view: brandsFilter() },
  ];

  const potentialMatches = routes.map((root) => ({
    route: root,
    result: window.location.pathname.match(pathToRegex(root.path)),
  }));

  let match = potentialMatches.find((potentialMatche) => potentialMatche.result !== null);
  if (!match) {
    match = {
      route: routes[2],
      result: [window.location.pathname],
    };
  }
  // console.log(`MAYBE{${Array.from(match.route.path.matchAll(/:(\w+)/g))}`);
  return match;
};

export const runPageFunctional = () => {
  const match = getMatch();
  runFunctionInRouting(match.route.path);
  console.log(`Path: ${match.route.path}`);
};

export const router = async () => {
  const match = getMatch();
  if (match !== null) {
    const res = match.result;
    if (res !== null) {
      const values = res.slice(1) as unknown as string;
      console.log(values[0]);
      const root = match?.route.path as string;
      const keys = Array.from(root.matchAll(/:(\w+)/g)).map((result) => result[1]);
      // console.log(keys[0]);
      // console.log(Array.from(root.matchAll(/:(\w+)/g)));
      // const array = Array.from(root.matchAll(/:(\w+)/g));
      // const mainres = Object.fromEntries(keys.map((key, i) => [key, values[i]]));
      const main = document.querySelector("main") as HTMLBodyElement;
      if (keys[0] === "id") {
        main.innerHTML = await ProductPage(values[0]);
        runPageFunctional();
        setListenerForLinks();
        return;
      }
      if (match.route.view instanceof Promise) {
        main.innerHTML = await match.route.view;
      } else {
        main.innerHTML = match.route.view;
      }
      runPageFunctional();
      setListenerForLinks();
    }
  }
};

export const navigateTo = (url: string) => {
  window.history.pushState(null, "", url);
  router();
};
