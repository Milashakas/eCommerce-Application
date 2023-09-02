import { Product } from "@commercetools/platform-sdk";
import getProductDataAsyncAction from "../redux/asyncActions/getProductDataAsyncAction";
// import { navigateTo } from "../router";
import { IProdData } from "../interfaces/IProdData";

const showProduct = async (id: string): Promise<IProdData | null> => {
  // here the place to extract id from URL
  // const idtest = "bd6b638b-6a20-4331-9f15-8826ca747c31";
  const responseProduct = await getProductDataAsyncAction(id);

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
    };
  } else {
    return null;
  }
  return prodDataObj;
};

export default showProduct;
