import { Product } from "@commercetools/platform-sdk";
import getProduct from "../../api/getProduct";
import { IProductResponseData, IProductData } from "../../interfaces/IProducts";
import store from "../createStore";
import { displayPreloaderAction } from "../actions";

const getProductDataAsyncAction = async (productId: string): Promise<IProductData> => {
  store.dispatch(displayPreloaderAction(true));

  const productDataResponse: IProductResponseData = await getProduct(productId);

  const { statucCode } = productDataResponse;

  const data: IProductData = {
    isData: true,
    data: null,
    message: null,
  };

  if (!statucCode || (statucCode && !(statucCode >= 200 && statucCode < 299))) {
    data.isData = false;
    data.message = productDataResponse.message;

    store.dispatch(displayPreloaderAction(false));
  } else {
    const productData: Product = productDataResponse.productData as Product;
    data.data = productData;

    store.dispatch(displayPreloaderAction(false));
  }

  return data;
};

export default getProductDataAsyncAction;
