import { makeTag, makeDiv, makeImg, makeH3 } from "../utils/tagsCreation";

/* const testObj = { src: "https://static.thcdn.com/images/large/original//productimg/1600/1600/11401782-5525033037723852.jpg",
  price: 45 }; */

const generateSwiperBlock = () =>
  makeDiv(
    { class: "swiper-block" },
    makeDiv(
      { class: "swiper" },
      makeDiv(
        { class: "swiper-wrapper" },
        makeDiv(
          { class: "swiper-slide" },
          makeImg({
            class: "swiper-img1",
            alt: "Dry Oil Huile First",
            src: "https://static.thcdn.com/images/large/original//productimg/1600/1600/11401782-5525033037723852.jpg",
          }),
        ) +
          makeDiv(
            { class: "swiper-slide" },
            makeImg({
              class: "swiper-img2",
              alt: "Dry Oil Huile Second",
              src: "https://static.thcdn.com/images/large/original//productimg/1600/1600/11401782-1085033037941301.jpg",
            }),
          ) +
          makeDiv(
            { class: "swiper-slide" },
            makeImg({
              class: "swiper-img3",
              alt: "Dry Oil Huile Third",
              src: "https://static.thcdn.com/images/large/original//productimg/1600/1600/11401782-1695033038088262.jpg",
            }),
          ),
      ) +
        makeDiv({ class: "swiper-pagination" }) +
        makeDiv({ class: "swiper-button-prev" }) +
        makeDiv({ class: "swiper-button-next" }),
    ),
  );

const generateInfoBlock = () =>
  makeDiv(
    { class: "info-block" },
    makeDiv(
      { class: "text-block" },
      makeDiv(
        { class: "brand-logo" },
        makeImg({
          class: "brand-img",
          alt: "Brand Logo",
          src: "https://virtualtrexpo.com/wp-content/uploads/2020/07/Nuxe-logo-1.png",
        }),
      ) +
        makeH3({ class: "product-name" }, "Shimmering Dry Oil Huile Prodigieuse®") +
        makeDiv(
          { class: "product-short-descr" },
          "Nourishes, softens and illuminates <br> 98% ingredients of natural origin",
        ) +
        makeDiv({ class: "product-ml" }, "Size: 100 ml"),
    ) +
      makeDiv(
        { class: "availability-price-block" },
        makeDiv({ class: "product-instock" }, "<i class='fa-solid fa-check'></i> In Stock") +
          makeDiv({ class: "product-price-line" }) +
          makeDiv({ class: "product-price" }, "Price: 43.00 <i class='fa-solid fa-euro-sign'></i>") +
          makeDiv({ class: "product-price-line" }),
      ) +
      makeDiv(
        { class: "cart-button-block" },
        makeTag("button", { type: "submit", class: "cart-button" }, "Add to cart") +
          makeDiv(
            { class: "product-shipment" },
            "<i class='fa-solid fa-truck-fast'></i> Free Shipping for Orders Over 99 EUR",
          ),
      ),
  );

const generateDetailedInfoBlock = () =>
  makeDiv(
    { class: "product-detailed-info" },
    makeDiv(
      { class: "about-product" },
      makeDiv({ class: "about-product-heading" }, "About:") +
        makeDiv(
          { class: "about-product-text" },
          "The shimmering version of Huile Prodigieuse® nourishes, softens and illuminates the skin and hair thanks to its very fine mineral-origin pearly particles. The dry oil has a unique texture and a captivating fragrance.",
        ),
    ) +
      makeDiv({ class: "product-detailed-line" }) +
      makeDiv(
        { class: "beauty-tips" },
        makeDiv({ class: "beauty-tips-heading" }, "Beauty Tips:") +
          makeDiv(
            { class: "beauty-tips-text" },
            "Use Huile Prodigieuse® Or all year round, winter and summer, on your face, body and hair. <br> On your face, dab gently over your skin with a flat brush or your fingertips, paying particular attention to areas that capture light: cheekbones, bridge of the nose, forehead above the eyebrows. <br> On your body, warm 2 to 3 sprays of Huile Prodigieuse® Or in your hands. Decide which areas you want to highlight and very gently smooth your hands over them. <br> On your hair, apply a few drops of Huile Prodigieuse® Or to the lengths and ends for beautiful golden highlights.",
          ),
      ),
  );

const ProductPage = () =>
  makeDiv(
    { class: "product-page-container" },
    makeDiv({ class: "product-container-back" }) +
      makeDiv(
        { class: "product-info-container" },
        makeDiv({ class: "product-info-main" }, generateSwiperBlock() + generateInfoBlock()) +
          makeDiv(
            { class: "separation" },
            makeDiv({ class: "separation-text" }, "More Details") +
              makeDiv({ class: "separation-sign" }, "<i class='fa-solid fa-angle-down'></i>"),
          ) +
          generateDetailedInfoBlock(),
      ),
  );

export default ProductPage;
