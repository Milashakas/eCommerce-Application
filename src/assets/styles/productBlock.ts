const createProduct = (name: string, img: string | undefined, price: number, des: string) => {
  const code = `
  <div class="product-block">
  <div class="product-block-image">
  <img src="${img}" class="product-block-img">
  <div class="product-block-busket-button">
  <p>Add to bag</p>
  </div>
  </div>
  <div class="product-description-block">
  <p class="product-block-name">${name}</p>
  <p class="product-block-description">${des}</p>
  <p class="product-block-price">${price} EUR</p>
  </div>
  </div>
  `;
  return code;
};

export default createProduct;
