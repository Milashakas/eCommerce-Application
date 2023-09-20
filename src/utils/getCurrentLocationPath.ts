const getCurrentLocationSecondPath = (): string | undefined => {
  const path = window.location.pathname;
  const secondPath: string | undefined = path.split("/")[2];
  return secondPath;
};

const getCurrentLocationPath = (): string => {
  const currentPath = window.location.pathname;

  const firstPath = currentPath.split("/")[1];
  return firstPath;
};

export { getCurrentLocationSecondPath, getCurrentLocationPath };
