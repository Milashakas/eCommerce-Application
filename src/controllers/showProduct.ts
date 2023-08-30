import { Product } from "@commercetools/platform-sdk";
import getProductDataAsyncAction from "../redux/asyncActions/getProductDataAsyncAction";

export interface IProdData {
  brandLogo: string;
  img1: string;
  img2: string;
  img3: string;
  name: string;
  description: string;
  size: string;
  price: string;
  about: string;
  beautyTips: string;
}

const showProduct = async (): Promise<IProdData | null> => {
  // here the place to extract id from URL
  const productId = "bd6b638b-6a20-4331-9f15-8826ca747c31";
  const responseProduct = await getProductDataAsyncAction(productId);

  let prodDataObj: IProdData | null = null;

  if (responseProduct.isData) {
    const product: Product = responseProduct.data as Product;
    const certainData = product.masterData.current;
    console.log(certainData);
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

    // console.log(prodDataObj);
  }
  return prodDataObj;
};

export default showProduct;
