import productsList from "../controllers/getCatalogProducts";
import createProduct from "../assets/styles/productBlock";

const setCatalog = () => {
  const list = productsList();
  const catalog = document.querySelector(".catalog-section-products") as HTMLElement;
  list?.forEach((item) => {
    const name = item.name as unknown as string;
    const img = item.masterVariant.images;
    let firstImage;
    if (img) {
      firstImage = img[0].url;
    }
    const price = item.masterVariant.prices;
    let currentPrice = 1;
    if (price) {
      currentPrice = (price[0].value.centAmount / 100) as number;
    }
    const des = item.description;
    let currentDescription = "";
    if (des) {
      currentDescription = des["en-US"] as string;
    }
    catalog.innerHTML += createProduct(name, firstImage, currentPrice, currentDescription);
  });
};

export default setCatalog;
