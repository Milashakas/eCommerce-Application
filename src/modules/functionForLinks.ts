import { navigateTo } from "../router";

const setListenerForLinks = () => {
  const main = document.querySelector("main") as HTMLElement;
  const links = main.querySelectorAll("a");
  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      navigateTo(link.href);
    });
  });
};
export default setListenerForLinks;
