// eslint-disable-next-line max-len
const pr = (name: string, img: string, price: string, description: string, id: string, sale: string | undefined) => {
  let code;
  if (sale === undefined) {
    code = `
  <a class="product-block" id="${id}" href="/catalog/${id}">
  <div class="product-block-image">
  <img src="${img}" class="product-block-img">
  <div class="product-block-busket-button">
  <p>Add to bag</p>
  </div>
  </div>
  <div class="product-description-block">
  <p class="product-block-name">${name}</p>
  <p class="product-block-description">${description}</p>
  <p class="product-block-price">${price} EUR</p>
  </div>
  </a>
  `;
  } else {
    code = `
    <a class="product-block" id="${id}" href="/catalog/${id}">
    <div class="product-block-image">
    <img src="${img}" class="product-block-img">
    <div class="product-block-busket-button">
    <p>Add to bag</p>
    </div>
    </div>
    <div class="product-description-block">
    <p class="product-block-name">${name}</p>
    <p class="product-block-description">${description}</p>
    <div class="product-block-prices">
    <p class="product-block-price product-block-price-withoutdis">${price} EUR</p>
    <p class="product-block-price product-block-price-dis">${sale} EUR</p>
    </div>
    </div>
    </a>
    `;
  }

  return code;
};

export default pr;
