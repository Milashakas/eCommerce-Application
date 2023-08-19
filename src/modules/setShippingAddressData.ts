import ShippingAddressBlock from "../components/ShippingAddressBlock";

export const countries = [
  { name: "", code: "" },
  { name: "Austria", code: "AT" },
  { name: "Belgium", code: "BE" },
  { name: "Bulgaria", code: "BG" },
  { name: "Croatia", code: "HR" },
  { name: "Republic of Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Estonia", code: "EE" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "Greece", code: "GR" },
  { name: "Hungary", code: "HU" },
  { name: "Ireland", code: "IE" },
  { name: "Italy", code: "IT" },
  { name: "Latvia", code: "LV" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Malta", code: "MT" },
  { name: "Netherlands", code: "NL" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Romania", code: "RO" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Spain", code: "ES" },
  { name: "Sweden", code: "SE" },
];

export const insertSelectOptions = (): string =>
  // eslint-disable-next-line implicit-arrow-linebreak
  countries
    .map((country) => `<option value="${country.name}" data-code="${country.code}">${country.name}</option>`)
    .join("");

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
