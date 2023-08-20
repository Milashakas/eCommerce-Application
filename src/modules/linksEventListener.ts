import { navigateTo } from "../router";

const setLinksListener = () => {
  const links = document.querySelectorAll("a");
  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      navigateTo(link.href);
    });
  });
};

export default setLinksListener;
