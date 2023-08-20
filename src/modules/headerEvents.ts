import setLinksListener from "./linksEventListener";

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

  setLinksListener();

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
