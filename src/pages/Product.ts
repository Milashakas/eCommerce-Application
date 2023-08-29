const ProductPage = () => {
  const view = `
  <div class="product-page-container">
  <div class="product-container-back"></div>
    <div class="product-info-container">
      <div class="product-info-main">
        <div class="swiper-block">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img class="swiper-img1" alt="Dry Oil Huile First" src="https://static.thcdn.com/images/large/original//productimg/1600/1600/11401782-5525033037723852.jpg"></div>
              <div class="swiper-slide"><img class="swiper-img2" alt="Dry Oil Huile Second" src="https://static.thcdn.com/images/large/original//productimg/1600/1600/11401782-1085033037941301.jpg"></div>
              <div class="swiper-slide"><img class="swiper-img3" alt="Dry Oil Huile Third" src="https://static.thcdn.com/images/large/original//productimg/1600/1600/11401782-1695033038088262.jpg"></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
        <div class="info-block">
          <div class="text-block">
            <h3 class="product-name">Shimmering Dry Oil Huile Prodigieuse®</h3>
            <div class="product-short-descr">Nourishes, softens and illuminates <br> 98% ingredients of natural origin</div>
            <div class="product-ml">Size: 100 ml</div>
          </div>
          <div class="availability-price-block">
            <div class="product-instock"><i class="fa-solid fa-check"></i> In Stock</div>
            <div class="product-price-line"></div>
            <div class="product-price"><i class="fa-solid fa-money-bill-1-wave"></i> Price: 43 EUR</div>
            <div class="product-price-line"></div>
          </div>
          <div class="cart-button-block">
            <button type="submit" class="cart-button">Add to cart</button>
            <div class="product-shipment"><i class="fa-solid fa-truck-fast"></i> Free Shipping for Orders Over 99 EUR</div>
          </div>
        </div>
      </div>
      <div class="separation">
        <div class="separation-text">More Details</div>
        <div class="separation-sign"><i class="fa-solid fa-angle-down"></i></div>
      </div>
      <div class="product-detailed-info">
        <div class="about-product">
          <div class="about-product-heading">About: </div>
          <div class="about-product-text">The shimmering version of Huile Prodigieuse® nourishes, softens and illuminates the skin and hair thanks to its very fine mineral-origin pearly particles. The dry oil has a unique texture and a captivating fragrance.</div>
        </div>
        <div class="product-detailed-line"></div>
        <div class="beauty-tips">
          <div class="beauty-tips-heading">Beauty Tips:</div>
          <div class="beauty-tips-text">Use Huile Prodigieuse® Or all year round, winter and summer, on your face, body and hair. <br> On your face, dab gently over your skin with a flat brush or your fingertips, paying particular attention to areas that capture light: cheekbones, bridge of the nose, forehead above the eyebrows. <br> On your body, warm 2 to 3 sprays of Huile Prodigieuse® Or in your hands. Decide which areas you want to highlight and very gently smooth your hands over them. <br> On your hair, apply a few drops of Huile Prodigieuse® Or to the lengths and ends for beautiful golden highlights.</div>
        </div>
      </div>
    </div>
  </div>
  `;
  return view;
};

export default ProductPage;
