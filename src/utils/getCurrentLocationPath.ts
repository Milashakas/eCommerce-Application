const getCurrentLocationSecondPath = (): string | undefined => {
  const path = window.location.pathname;
  const secondPath: string | undefined = path.split("/")[2];
  return secondPath;
};

const getCurrentLocationPath = (): string => {
  const path = window.location.pathname;
  return path;
};

export { getCurrentLocationSecondPath, getCurrentLocationPath };
