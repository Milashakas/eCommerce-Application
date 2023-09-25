const handleModalVisibility = () => {
  const modal = document.querySelector(".modal") as HTMLElement | null;
  const header = document.querySelector(".header") as HTMLElement | null;
  const slides = document.querySelectorAll<HTMLElement>(
    ".product-info-main > .swiper-block > .swiper > .swiper-wrapper > .swiper-slide",
  );
  const swiperImgsList = document.querySelectorAll<HTMLImageElement>(
    ".product-info-main > .swiper-block > .swiper > .swiper-wrapper > .swiper-slide > img",
  );
  const modalSwiperImgsList = document.querySelectorAll<HTMLImageElement>(
    ".modal-content > .swiper-block > .swiper > .swiper-wrapper > .swiper-slide > img",
  );

  if (!modal) {
    return;
  }

  // Сохраняем изначальные значения src для modalSlides
  const swiperImgs = Array.from(swiperImgsList);
  const modalSwiperImgs = Array.from(modalSwiperImgsList);
  const initialSrcValues = swiperImgs.map((img) => img.src);

  const [firstImg, secondImg, thirdImg] = modalSwiperImgs;

  const show = () => {
    modal.style.display = "block";
    if (header) header.style.zIndex = "3";

    const [firstSlide, secondSlide, thirdSlide] = slides;

    if (firstSlide?.classList.contains("swiper-slide-active")) {
      // eslint-disable-next-line max-len
      [firstImg.src, secondImg.src, thirdImg.src] = [initialSrcValues[0], initialSrcValues[1], initialSrcValues[2]];
    }

    if (secondSlide?.classList.contains("swiper-slide-active")) {
      // eslint-disable-next-line max-len
      [firstImg.src, secondImg.src, thirdImg.src] = [initialSrcValues[1], initialSrcValues[2], initialSrcValues[0]];
    }

    if (thirdSlide?.classList.contains("swiper-slide-active")) {
      // eslint-disable-next-line max-len
      [firstImg.src, secondImg.src, thirdImg.src] = [initialSrcValues[2], initialSrcValues[0], initialSrcValues[1]];
    }
  };

  const hide = () => {
    modal.style.display = "none";
    if (header) header.style.zIndex = "10";

    modalSwiperImgs.forEach((img, index) => {
      // eslint-disable-next-line no-param-reassign
      img.src = initialSrcValues[index];
    });
  };

  slides.forEach((slide) => {
    slide.addEventListener("click", show);
  });

  const closeButton = modal.querySelector(".close-button") as HTMLElement | null;
  if (closeButton) {
    closeButton.addEventListener("click", hide);
  }
};

export default handleModalVisibility;
