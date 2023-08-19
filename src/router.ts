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
import orderInformationPage from "./pages/OrderInfo";
import deliveryPage from "./pages/Delivery";
import returnPage from "./pages/Return";
import brandsFilter from "./pages/BrandsFilter";

const router = async () => {
  const routes = [
    { path: "/404", view: errorPage() },
    { path: "/", view: mainPage() },
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
    { path: "/orderInformation", view: orderInformationPage() },
    { path: "/delivery", view: deliveryPage() },
    { path: "/return", view: returnPage() },
    { path: "/filter", view: brandsFilter() },
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
  runFunctionInRouting(match.route.path);
};

export default router;
