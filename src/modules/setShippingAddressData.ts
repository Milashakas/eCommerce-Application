import ShippingAddressBlock from "../components/ShippingAddressBlock";

export const countries = [
  "",
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Republic of Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
];

export const insertSelectOptions = (): string =>
  // eslint-disable-next-line implicit-arrow-linebreak
  countries.map((country) => `<option value="${country}">${country}</option>`).join("");

const copyBillingValuesToShipping = () => {
  const billingInputs = document.querySelectorAll(".billing-address-block input, .billing-address-block select");
  const shippingInputs = document.querySelectorAll(".shipping-address-block input, .shipping-address-block select");

  billingInputs.forEach((billingInput, index) => {
    const shippingInput = shippingInputs[index];

    if (shippingInput) {
      if (billingInput instanceof HTMLInputElement && shippingInput instanceof HTMLInputElement) {
        shippingInput.value = billingInput.value;
        // eslint-disable-next-line max-len
      } else if (billingInput instanceof HTMLSelectElement && shippingInput instanceof HTMLSelectElement) {
        shippingInput.selectedIndex = billingInput.selectedIndex;
      }
    }
  });
};

const handleSameShippingChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  const existingShippingBlock = document.querySelector(".shipping-address-block");
  if (existingShippingBlock) {
    existingShippingBlock.remove();
  }

  const formButton = document.querySelector(".form-button");
  const shippingBlock = ShippingAddressBlock();

  if (target.id === "yes") {
    formButton?.insertAdjacentHTML("beforebegin", shippingBlock);
    copyBillingValuesToShipping();
  } else if (target.id === "no") {
    formButton?.insertAdjacentHTML("beforebegin", shippingBlock);
  }
};

const initSameShippingListener = () => {
  const sameShippingRadios = document.querySelectorAll("input[name='sameShipping']");
  sameShippingRadios.forEach((radio) => {
    radio.addEventListener("change", handleSameShippingChange);
  });
};

export default initSameShippingListener;
