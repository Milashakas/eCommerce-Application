const getCurrentLocationPath = (): string | undefined => {
  const path = window.location.pathname;
  const secondPath: string | undefined = path.split("/")[2];
  return secondPath;
};

export default getCurrentLocationPath;
