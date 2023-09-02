import productsList from "../controllers/getCatalogProducts";
import createProduct from "./productBlock";

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
    let mainImg = "";
    if (firstImage !== undefined) {
      mainImg = firstImage;
    }
    const price = item.masterData.current.masterVariant.prices;
    let currentPrice: number | string = 2;
    let mainPrice = "1";
    let sale;
    let mainSale: undefined | string;
    if (price) {
      currentPrice = (price[0].value.centAmount / 100) as number;
      const prodPrice = currentPrice.toFixed(2);
      mainPrice = prodPrice;
      console.log(typeof prodPrice);
      sale = price[0].discounted;
    }

    if (sale !== undefined) {
      sale = (sale.value.centAmount / 100) as number;
      const prodSale = sale.toFixed(2);
      mainSale = prodSale;
    }
    const des = item.masterData.current.description;
    let currentDes = "";
    if (des) {
      currentDes = des["en-US"] as string;
    }
    const { id } = item;
    if (sale !== undefined) {
      catalog.innerHTML += createProduct(name, mainImg, mainPrice, currentDes, id, mainSale);
    } else {
      catalog.innerHTML += createProduct(name, mainImg, mainPrice, currentDes, id, mainSale);
    }
  });
};

export default setCatalog;
