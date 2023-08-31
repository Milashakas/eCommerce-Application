// eslint-disable-next-line import/no-extraneous-dependencies
import Swiper from "swiper";
// eslint-disable-next-line import/no-unresolved
import { Navigation, Pagination } from "swiper/modules";

const setSwiper = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiper.init();
};

export default setSwiper;
