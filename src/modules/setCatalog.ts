import productsList from "../controllers/getCatalogProducts";
import createProduct from "../assets/styles/productBlock";

const setCatalog = async () => {
  const list = await productsList();
  const catalog = document.querySelector(".catalog-section-products") as HTMLElement;
  list?.forEach((item) => {
    const name = item.masterData.current.name["en-US"] as unknown as string;
    const img = item.masterData.current.masterVariant.images;
    let firstImage;
    if (img) {
      firstImage = img[0].url;
    }
    const price = item.masterData.current.masterVariant.prices;
    let currentPrice = 1;
    if (price) {
      currentPrice = (price[0].value.centAmount / 100) as number;
    }
    const des = item.masterData.current.description;
    let currentDescription = "";
    if (des) {
      currentDescription = des["en-US"] as string;
    }
    catalog.innerHTML += createProduct(name, firstImage, currentPrice, currentDescription);
  });
};

export default setCatalog;
