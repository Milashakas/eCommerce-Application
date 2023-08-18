import mainPage from "./pages/Main";
import errorPage from "./pages/404";
import RegistrationForm from "./pages/Registration";
import LoginForm from "./pages/Login";

export const router = async () => {
  const routes = [
    { path: "/404", view: errorPage() },
    { path: "/", view: mainPage() },
    { path: "/hair", view: "<div>hair</div>" },
    { path: "/login", view: LoginForm() },
    { path: "/signup", view: RegistrationForm() },
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
};
export const navigateTo = (url:string) => {
  window.history.pushState(null, "", url);
  router();
};
