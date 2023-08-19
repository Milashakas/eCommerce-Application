const setBodyBackground = (): void => {
  const bodyElement = document.body;

  bodyElement.style.background = "url('../images/registration_bg2.webp')";
  bodyElement.style.backgroundSize = "cover";
  bodyElement.style.backgroundRepeat = "no-repeat";
  bodyElement.style.backgroundAttachment = "fixed";
};

export default setBodyBackground;
