const PROSPECTIVE_CATEGORY_NAME = ["hair", "face", "body", "nuxe", "ordinary", "sale", "clarins", "kiehls"];

const getPathSlicesArr = (windowPathName: string): string[] => {
  const pathSlicesArr = windowPathName.split("/");
  pathSlicesArr.shift();

  return pathSlicesArr;
};

const checkIsCorrectCatalogPath = (pathSlicesArr: string[]) => {
  const categoryName: string = pathSlicesArr[1].split("-")[1];
  if (PROSPECTIVE_CATEGORY_NAME.indexOf(categoryName) !== -1) return true;

  return false;
};

const checkIsRouteMatch = (rootPath: string): boolean => {
  const windowPathName = window.location.pathname;
  let isMatch: boolean = windowPathName === rootPath;
  const pathSlicesArr: string[] = getPathSlicesArr(windowPathName);

  if (isMatch) return isMatch;

  if (rootPath === "/catalog" && pathSlicesArr.length === 2 && checkIsCorrectCatalogPath(pathSlicesArr)) isMatch = true;
  if (rootPath === "/product" && pathSlicesArr.length === 2) isMatch = true;

  return isMatch;
};

export default checkIsRouteMatch;
