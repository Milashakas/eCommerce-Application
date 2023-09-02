const checkIsRouteMatch = (rootPath: string): boolean => {
  const windowPathName = window.location.pathname;
  let isMatch: boolean = windowPathName === rootPath;

  if (isMatch) return isMatch;

  if (rootPath === "/catalog") {
    const pathSlicesArr = windowPathName.split("/");
    pathSlicesArr.shift();

    if (pathSlicesArr.length === 2) isMatch = true;
  }

  return isMatch;
};

export default checkIsRouteMatch;
