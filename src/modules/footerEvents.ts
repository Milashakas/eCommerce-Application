const footerOpenLinksFunctional = () => {
  const navButton = document.querySelector(".foot-title-nav");
  navButton?.addEventListener("click", () => {
    const navMenu = document.querySelector(".footer-nav");
    navMenu?.classList.toggle("footer-active");
    navButton.classList.toggle("active-but");
  });

  const infoButton = document.querySelector(".foot-title-info");
  infoButton?.addEventListener("click", () => {
    const infoList = document.querySelector(".footer-info-list");
    infoList?.classList.toggle("footer-active");
    infoButton.classList.toggle("active-but");
  });

  const aboutButton = document.querySelector(".foot-title-aboutus");
  aboutButton?.addEventListener("click", () => {
    const aboutusList = document.querySelector(".footer-aboutus-list");
    aboutusList?.classList.toggle("footer-active");
    aboutButton.classList.toggle("active-but");
  });
};

export default footerOpenLinksFunctional;
