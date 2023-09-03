// eslint-disable-next-line max-len
const ProductItem = (name: string, img: string | undefined, price: number, des: string, id: string) => {
  const code = `
  <div class="product-block" id="${id}">
    <a href="product/${id}" class="product-block-image">
      <img src="${img}" class="product-block-img" />
      <div class="product-block-busket-button">
        <p>Add to bag</p>
      </div>
    </a>
    <div class="product-description-block">
      <p class="product-block-name">${name}</p>
      <p class="product-block-description">${des}</p>
      <p class="product-block-price">${price} EUR</p>
    </div>
  </div>
  `;
  return code;
};

export default ProductItem;
