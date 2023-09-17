import { Product } from "@commercetools/platform-sdk";
import getProductDataAsyncAction from "../redux/asyncActions/getProductDataAsyncAction";
// import { navigateTo } from "../router";
import { IProdData } from "../interfaces/IProdData";
import { getCurrentLocationSecondPath } from "../utils/getCurrentLocationPath";

const showProduct = async (): Promise<IProdData | null> => {
  // here the place to extract id from URL
  const productId = getCurrentLocationSecondPath();

  if (!productId) return null;

  const responseProduct = await getProductDataAsyncAction(productId);

  let prodDataObj: IProdData | null = null;

  if (responseProduct.isData) {
    const product: Product = responseProduct.data as Product;
    const certainData = product.masterData.current;
    const prodBrandLogo = certainData.masterVariant.images?.[3]?.url || "Url not available";
    const prodImg1 = certainData.masterVariant.images?.[0]?.url || "Url not available";
    const prodImg2 = certainData.masterVariant.images?.[1]?.url || "Url not available";
    const prodImg3 = certainData.masterVariant.images?.[2]?.url || "Url not available";
    const prodName = certainData.name["en-US"];
    const prodDescription = certainData.description?.["en-US"] || "Description not available";
    const prodSize = certainData.masterVariant.attributes?.[0]?.value || "Size not available";
    const rawPrice = certainData.masterVariant.prices?.[0]?.value?.centAmount;
    const prodPrice = rawPrice !== undefined ? (rawPrice / 100).toFixed(2) : "Price not available";
    const prodAbout = certainData.masterVariant.attributes?.[1]?.value || "There is no info";
    const prodBeautyTips = certainData.masterVariant.attributes?.[2]?.value || "There is no info";
    const rawSalePrice = certainData.masterVariant.prices?.[0]?.discounted?.value?.centAmount;
    const prodSalePrice =
      rawSalePrice !== undefined
        ? `${(rawSalePrice / 100).toFixed(2)} <i class='fa-solid fa-euro-sign'></i><div class="sale-img"></div>`
        : "";

    prodDataObj = {
      brandLogo: prodBrandLogo,
      img1: prodImg1,
      img2: prodImg2,
      img3: prodImg3,
      name: prodName,
      description: prodDescription,
      size: prodSize,
      price: prodPrice,
      about: prodAbout,
      beautyTips: prodBeautyTips,
      salePrice: prodSalePrice,
    };
  } else {
    return null;
  }
  return prodDataObj;
};

export default showProduct;
