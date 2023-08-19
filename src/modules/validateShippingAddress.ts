import { countries } from "./setShippingAddressData";

const displayShippingError = (selector: string, message: string) => {
  const input = document.querySelector(selector) as HTMLInputElement;
  const errorText = input.nextElementSibling as HTMLElement;
  const errorSign = errorText.nextElementSibling as HTMLElement;

  errorText.innerHTML = message;
  input.classList.add("invalid");
  errorSign.style.display = "block";
};

const hideShippingError = (selector: string) => {
  const input = document.querySelector(selector) as HTMLInputElement;
  const errorText = input.nextElementSibling as HTMLElement;
  const errorSign = errorText.nextElementSibling as HTMLElement;

  errorText.innerHTML = "";
  input.classList.remove("invalid");
  errorSign.style.display = "none";
};

const validateShippingAddress = () => {
  const selectors = {
    street: "#shipping-street",
    city: "#shipping-city",
    postal: "#shipping-postal-code",
    country: "#shipping-select",
  };

  const streetInput = document.querySelector(selectors.street) as HTMLInputElement;
  streetInput?.addEventListener("blur", () => {
    if (!streetInput.value.trim()) {
      displayShippingError(selectors.street, "Street is required");
    } else {
      hideShippingError(selectors.street);
    }
  });
  streetInput?.addEventListener("focus", () => hideShippingError(selectors.street));

  const cityInput = document.querySelector(selectors.city) as HTMLInputElement;
  const cityRegex = /^[a-zA-Z\s]*$/;
  cityInput?.addEventListener("blur", () => {
    if (!cityInput.value.trim()) {
      displayShippingError(selectors.city, "City is required");
    } else if (!cityRegex.test(cityInput.value)) {
      displayShippingError(selectors.city, "Please exclude special chars and/or numbers");
    } else {
      hideShippingError(selectors.city);
    }
  });
  cityInput?.addEventListener("focus", () => hideShippingError(selectors.city));

  const postalInput = document.querySelector(selectors.postal) as HTMLInputElement;
  const postalRegex = /^[A-Z0-9]{3,7}$/;
  postalInput?.addEventListener("blur", () => {
    if (!postalInput.value.trim()) {
      displayShippingError(selectors.postal, "Postal code is required");
    } else if (!postalRegex.test(postalInput.value)) {
      displayShippingError(selectors.postal, "Should have 3 - 7 chars: uppercase letters and/or numbers");
    } else {
      hideShippingError(selectors.postal);
    }
  });
  postalInput?.addEventListener("focus", () => hideShippingError(selectors.postal));

  const countrySelect = document.querySelector(selectors.country) as HTMLSelectElement;
  countrySelect?.addEventListener("blur", () => {
    if (countrySelect.value.trim() === "") {
      displayShippingError(selectors.country, "Country is required");
    } else if (!countries.some((country) => country.name === countrySelect.value)) {
      displayShippingError(selectors.country, "Invalid country selection");
    } else {
      hideShippingError(selectors.country);
    }
  });
  countrySelect?.addEventListener("focus", () => hideShippingError(selectors.country));
};

const handleShippingAddressValidation = () => {
  const yesRadio = document.getElementById("yes") as HTMLInputElement;
  const noRadio = document.getElementById("no") as HTMLInputElement;

  yesRadio.addEventListener("change", () => {
    if (yesRadio.checked) {
      validateShippingAddress();
    }
  });

  noRadio.addEventListener("change", () => {
    if (noRadio.checked) {
      validateShippingAddress();
    }
  });
};

export default handleShippingAddressValidation;
