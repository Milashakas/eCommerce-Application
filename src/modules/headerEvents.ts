import { navigateTo } from "../router";

const headerOpenMenuFunctional = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const { scrollY } = window;
    if (scrollY === 0) {
      header?.classList.remove("header-background");
    } else {
      header?.classList.add("header-background");
    }
  });

  const links = document.querySelectorAll("a");
  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const link = e.target as HTMLAnchorElement;
      navigateTo(link.href);
    });
  });

  const burger = document.querySelector(".burger");
  const overlay = document.querySelector(".overlay");
  const headerNav = document.querySelector(".header-nav");
  const lines = document.querySelectorAll(".burger-line");
  burger?.addEventListener("click", () => {
    overlay?.classList.toggle("none");
    headerNav?.classList.toggle("header-opened");
    lines.forEach((item) => item.classList.toggle("burger-line-acrive"));
  });
  overlay?.addEventListener("click", () => {
    overlay?.classList.toggle("none");
    headerNav?.classList.toggle("header-opened");
    lines.forEach((item) => item.classList.toggle("burger-line-acrive"));
  });
};
export default headerOpenMenuFunctional;
