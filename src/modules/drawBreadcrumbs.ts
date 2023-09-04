const drawBreadcrumbs = (): void => {
  const url = window.location.href;

  const match = url.match(/http:\/\/[^/]+\/([^/]+)\/[^-]+-([^-]+)$/);

  if (!match) {
    return;
  }

  const [, category, subcategory] = match;

  const breadcrumbs = document.createElement("div");
  breadcrumbs.className = "breadcrumbs";

  const categoryLink = document.createElement("a");
  categoryLink.href = `/${category}`;
  categoryLink.innerText = category;

  const separator = document.createTextNode(" / ");

  const subcategoryLink = document.createElement("a");
  subcategoryLink.href = `/${category}/${category}-${subcategory}`;
  subcategoryLink.innerText = subcategory;

  breadcrumbs.append(categoryLink, separator, subcategoryLink);

  const searchingBlock = document.querySelector(".searchingBlock");
  if (searchingBlock && searchingBlock.parentNode) {
    searchingBlock.parentNode.insertBefore(breadcrumbs, searchingBlock.nextSibling);
  }
};

export default drawBreadcrumbs;
