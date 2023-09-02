const PROSPECTIVE_CATEGORY_NAME = ["hair", "body", "face"];

const checkIsCorrectCatalogPath = (pathSlicesArr: string[]) => {
  const categoryName: string = pathSlicesArr[1].split("-")[1];

  if (PROSPECTIVE_CATEGORY_NAME.indexOf(categoryName) !== -1) return true;

  return false;
};

const checkIsRouteMatch = (rootPath: string): boolean => {
  const windowPathName = window.location.pathname;
  let isMatch: boolean = windowPathName === rootPath;

  if (isMatch) return isMatch;

  if (rootPath === "/catalog") {
    const pathSlicesArr = windowPathName.split("/");
    pathSlicesArr.shift();

    if (pathSlicesArr.length === 2 && checkIsCorrectCatalogPath(pathSlicesArr)) isMatch = true;
  }

  return isMatch;
};

export default checkIsRouteMatch;
