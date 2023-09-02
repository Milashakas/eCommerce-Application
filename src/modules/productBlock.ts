const pr = (nam: string, im: string, pri: string, d: string, id: string, s: string | undefined) => {
  let code;
  if (s === undefined) {
    code = `
  <a class="product-block" id="${id}" href="/catalog/${id}">
  <div class="product-block-image">
  <img src="${im}" class="product-block-img">
  <div class="product-block-busket-button">
  <p>Add to bag</p>
  </div>
  </div>
  <div class="product-description-block">
  <p class="product-block-name">${nam}</p>
  <p class="product-block-description">${d}</p>
  <p class="product-block-price">${pri} EUR</p>
  </div>
  </a>
  `;
  } else {
    code = `
    <a class="product-block" id="${id}" href="/catalog/${id}">
    <div class="product-block-image">
    <img src="${im}" class="product-block-img">
    <div class="product-block-busket-button">
    <p>Add to bag</p>
    </div>
    </div>
    <div class="product-description-block">
    <p class="product-block-name">${nam}</p>
    <p class="product-block-description">${d}</p>
    <div class="product-block-prices">
    <p class="product-block-price product-block-price-withoutdis">${pri} EUR</p>
    <p class="product-block-price product-block-price-dis">${s} EUR</p>
    </div>
    </div>
    </a>
    `;
  }

  return code;
};

export default pr;
