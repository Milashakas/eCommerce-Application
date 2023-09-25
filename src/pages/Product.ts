import { makeTag, makeDiv, makeImg, makeH3 } from "../utils/tagsCreation";
import showProduct from "../controllers/showProduct";
import { IProdData } from "../interfaces/IProdData";
import errorPage from "./404";

const generateSwiperBlock = (prodDataObj: IProdData) =>
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
            alt: "Product First Photo",
            src: prodDataObj.img1,
          }),
        ) +
          makeDiv(
            { class: "swiper-slide" },
            makeImg({
              class: "swiper-img2",
              alt: "Product Second Photo",
              src: prodDataObj.img2,
            }),
          ) +
          makeDiv(
            { class: "swiper-slide" },
            makeImg({
              class: "swiper-img3",
              alt: "Product Third Photo",
              src: prodDataObj.img3,
            }),
          ),
      ) +
        makeDiv({ class: "swiper-pagination" }) +
        makeDiv({ class: "swiper-button-prev" }) +
        makeDiv({ class: "swiper-button-next" }),
    ),
  );

const generateInfoBlock = (prodDataObj: IProdData) =>
  makeDiv(
    { class: "info-block" },
    makeDiv(
      { class: "text-block" },
      makeDiv(
        { class: "brand-logo" },
        makeImg({
          class: "brand-img",
          alt: "Brand Logo",
          src: prodDataObj.brandLogo,
        }),
      ) +
        makeH3({ class: "product-name" }, `${prodDataObj.name}`) +
        makeDiv({ class: "product-short-descr" }, `${prodDataObj.description}`) +
        makeDiv({ class: "product-ml" }, `Size: ${prodDataObj.size} ml`),
    ) +
      makeDiv(
        { class: "availability-price-block" },
        makeDiv({ class: "product-instock" }, "<i class='fa-solid fa-check'></i> In Stock") +
          makeDiv({ class: "product-price-line" }) +
          makeDiv(
            { class: "product-price" },
            `Price: <span class="original-price"> ${prodDataObj.price} <i class='fa-solid fa-euro-sign'></i></span> <span class="sale-price">${prodDataObj.salePrice}</span>`,
          ) +
          makeDiv({ class: "product-price-line" }),
      ) +
      makeDiv(
        { class: "cart-button-block", id: `${prodDataObj.id}` },
        makeTag("button", { type: "submit", class: "cart-button", id: `${prodDataObj.id}` }, "Add to cart") +
          makeTag(
            "button",
            { type: "submit", class: "cart-remove-button", id: `${prodDataObj.id}` },
            "Remove from cart",
          ) +
          makeDiv(
            { class: "product-shipment" },
            "<i class='fa-solid fa-truck-fast'></i> Free Shipping for Orders Over 99 EUR",
          ),
      ),
  );

const generateDetailedInfoBlock = (prodDataObj: IProdData) =>
  makeDiv(
    { class: "product-detailed-info" },
    makeDiv(
      { class: "about-product" },
      makeDiv({ class: "about-product-heading" }, "About:") +
        makeDiv({ class: "about-product-text" }, prodDataObj.about),
    ) +
      makeDiv({ class: "product-detailed-line" }) +
      makeDiv(
        { class: "beauty-tips" },
        makeDiv({ class: "beauty-tips-heading" }, "Beauty Tips:") +
          makeDiv({ class: "beauty-tips-text" }, prodDataObj.beautyTips),
      ),
  );

const generateModal = (prodDataObj: IProdData) => `
  <div class="modal" id="imageModal">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      ${generateSwiperBlock(prodDataObj)}
    </div>
  </div>
`;

const asyncProductPage = async () => {
  const main = document.querySelector("main") as HTMLDivElement;
  let view: string = "";

  const prodDataObj = await showProduct();
  if (!prodDataObj) {
    view = errorPage();
  }

  if (prodDataObj) {
    view = makeDiv(
      { class: "product-page-container" },
      makeDiv({ class: "product-container-back" }) +
        makeDiv(
          { class: "product-info-container", id: `${prodDataObj.id}` },
          makeDiv({ class: "product-info-main" }, generateSwiperBlock(prodDataObj) + generateInfoBlock(prodDataObj)) +
            makeDiv(
              { class: "separation" },
              makeDiv({ class: "separation-text" }, "More Details") +
                makeDiv({ class: "separation-sign" }, "<i class='fa-solid fa-angle-down'></i>"),
            ) +
            generateDetailedInfoBlock(prodDataObj) +
            generateModal(prodDataObj),
        ),
    );
  }

  main.innerHTML = view;
};

export default asyncProductPage;
