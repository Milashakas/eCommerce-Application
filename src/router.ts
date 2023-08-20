import mainPage from "./pages/Main";
import errorPage from "./pages/404";
import RegistrationForm from "./pages/Registration";
import LoginForm from "./pages/Login";
import runFunctionInRouting from "./modules/setFunctionInRouting";

const getMatch = () => {
  const routes = [
    { path: "/404", view: errorPage() },
    { path: "/", view: mainPage() },
    { path: "/login", view: LoginForm() },
    { path: "/signup", view: RegistrationForm() },
  ];

  const potentialMatches = routes.map((root) => ({
    route: root,
    isMatch: window.location.pathname === root.path,
  }));

  let match = potentialMatches.find((potentialMatche) => potentialMatche.isMatch);
  if (!match) {
    // главная стр по дефолту
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  return match;
};

export const runPageFunctional = () => {
  const match = getMatch();
  runFunctionInRouting(match.route.path);
};

export const router = async () => {
  const match = getMatch();
  const main = document.querySelector("main") as HTMLBodyElement;
  main.innerHTML = match.route.view;
  runPageFunctional();
};

export const navigateTo = (url: string) => {
  window.history.pushState(null, "", url);
  router();
};
