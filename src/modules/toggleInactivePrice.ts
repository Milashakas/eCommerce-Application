const toggleInactivePrice = () => {
  const salePriceElement = document.querySelector(".sale-price");
  const originalPriceElement = document.querySelector(".original-price");

  if (salePriceElement && originalPriceElement && salePriceElement.textContent?.trim()) {
    originalPriceElement.classList.add("inactive-price");
  }
};

export default toggleInactivePrice;
