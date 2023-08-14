const footerEvents = () => {
  const navButton = document.querySelector(".foot-title-nav");
  navButton?.addEventListener("click", () => {
    const navMenu = document.querySelector(".footer-nav");
    navMenu?.classList.toggle("footer-active");
    navMenu?.classList.toggle("footer-active-margin");
  });

  const infoButton = document.querySelector(".foot-title-info");
  infoButton?.addEventListener("click", () => {
    const infoList = document.querySelector(".footer-info-list");
    infoList?.classList.toggle("footer-active");
  });

  const aboutButton = document.querySelector(".foot-title-aboutus");
  aboutButton?.addEventListener("click", () => {
    const aboutusList = document.querySelector(".footer-aboutus-list");
    aboutusList?.classList.toggle("footer-active");
  });
};

export default footerEvents;
