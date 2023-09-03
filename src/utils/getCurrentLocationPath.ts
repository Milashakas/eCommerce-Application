const getCurrentLocationPath = () => {
  const path = window.location.pathname;
  const secondPath = path.split("/")[2];
  return secondPath;
};

export default getCurrentLocationPath;
