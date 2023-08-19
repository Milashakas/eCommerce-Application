import { countries } from "./setShippingAddressData";

const displayStreetError = (message: string) => {
  const streetInput = document.querySelector("#billing-street") as HTMLInputElement;
  const streetErrorText = document.querySelector(".street-error")!;
  const errorSign = streetErrorText.nextElementSibling as HTMLElement;

  streetErrorText.innerHTML = message;
  streetInput.classList.add("invalid");
  errorSign.style.display = "block";
};

const hideStreetError = () => {
  const streetInput = document.querySelector("#billing-street") as HTMLInputElement;
  const streetErrorText = document.querySelector(".street-error")!;
  const errorSign = streetErrorText.nextElementSibling as HTMLElement;

  streetErrorText.innerHTML = "";
  streetInput.classList.remove("invalid");
  errorSign.style.display = "none";
};

const validateStreetOnBlur = () => {
  const streetInput = document.querySelector("#billing-street") as HTMLInputElement;
  if (!streetInput.value.trim()) {
    displayStreetError("Street is required");
  } else {
    hideStreetError();
  }
};

const displayCityError = (message: string) => {
  const cityInput = document.querySelector("#billing-city") as HTMLInputElement;
  const cityErrorText = document.querySelector(".city-error")!;
  const errorSign = cityErrorText.nextElementSibling as HTMLElement;

  cityErrorText.innerHTML = message;
  cityInput.classList.add("invalid");
  errorSign.style.display = "block";
};

const hideCityError = () => {
  const cityInput = document.querySelector("#billing-city") as HTMLInputElement;
  const cityErrorText = document.querySelector(".city-error")!;
  const errorSign = cityErrorText.nextElementSibling as HTMLElement;

  cityErrorText.innerHTML = "";
  cityInput.classList.remove("invalid");
  errorSign.style.display = "none";
};

const validateCityOnBlur = () => {
  const cityInput = document.querySelector("#billing-city") as HTMLInputElement;
  const regex = /^[a-zA-Z\s]*$/;
  if (!cityInput.value.trim()) {
    displayCityError("City is required");
  } else if (!regex.test(cityInput.value)) {
    displayCityError("Please exclude special chars and/or numbers");
  } else {
    hideCityError();
  }
};

const displayPostalError = (message: string) => {
  const postalInput = document.querySelector("#billing-postal-code") as HTMLInputElement;
  const postalErrorText = document.querySelector(".postal-error")!;
  const errorSign = postalErrorText.nextElementSibling as HTMLElement;

  postalErrorText.innerHTML = message;
  postalInput.classList.add("invalid");
  errorSign.style.display = "block";
};

const hidePostalError = () => {
  const postalInput = document.querySelector("#billing-postal-code") as HTMLInputElement;
  const postalErrorText = document.querySelector(".postal-error")!;
  const errorSign = postalErrorText.nextElementSibling as HTMLElement;

  postalErrorText.innerHTML = "";
  postalInput.classList.remove("invalid");
  errorSign.style.display = "none";
};

const validatePostalOnBlur = () => {
  const postalInput = document.querySelector("#billing-postal-code") as HTMLInputElement;
  const regex = /^[A-Z0-9]{3,7}$/;
  if (!postalInput.value.trim()) {
    displayPostalError("Postal code is required");
  } else if (!regex.test(postalInput.value)) {
    displayPostalError("Should have 3 - 7 chars: uppercase letters and/or numbers");
  } else {
    hidePostalError();
  }
};

const displayCountryError = (message: string) => {
  const countrySelect = document.querySelector("#billing-select") as HTMLSelectElement;
  const countryErrorText = document.querySelector(".select-error")!;
  const errorSign = countryErrorText.nextElementSibling as HTMLElement;

  countryErrorText.innerHTML = message;
  countrySelect.classList.add("invalid");
  errorSign.style.display = "block";
};

const hideCountryError = () => {
  const countrySelect = document.querySelector("#billing-select") as HTMLSelectElement;
  const countryErrorText = document.querySelector(".select-error")!;
  const errorSign = countryErrorText.nextElementSibling as HTMLElement;

  countryErrorText.innerHTML = "";
  countrySelect.classList.remove("invalid");
  errorSign.style.display = "none";
};

const validateCountryOnBlur = () => {
  const countrySelect = document.querySelector("#billing-select") as HTMLSelectElement;
  const isValidCountry = countries.some((country) => country.name === countrySelect.value);
  if (countrySelect.value.trim() === "") {
    displayCountryError("Country is required");
  } else if (!isValidCountry) {
    displayCountryError("Invalid country selection");
  } else {
    hideCountryError();
  }
};

const resetStreetValidationOnFocus = () => {
  const streetInput = document.querySelector("#billing-street") as HTMLInputElement;

  if (streetInput.classList.contains("invalid")) {
    hideStreetError();
  }
};

const resetCityValidationOnFocus = () => {
  const cityInput = document.querySelector("#billing-city") as HTMLInputElement;

  if (cityInput.classList.contains("invalid")) {
    hideCityError();
  }
};

const resetPostalValidationOnFocus = () => {
  const postalInput = document.querySelector("#billing-postal-code") as HTMLInputElement;

  if (postalInput.classList.contains("invalid")) {
    hidePostalError();
  }
};

const resetCountryValidationOnFocus = () => {
  const countrySelect = document.querySelector("#billing-select") as HTMLInputElement;

  if (countrySelect.classList.contains("invalid")) {
    hideCountryError();
  }
};

const validateBillingAddress = () => {
  const streetInput = document.querySelector("#billing-street");
  streetInput?.addEventListener("blur", validateStreetOnBlur);
  streetInput?.addEventListener("focus", resetStreetValidationOnFocus);

  const cityInput = document.querySelector("#billing-city");
  cityInput?.addEventListener("blur", validateCityOnBlur);
  cityInput?.addEventListener("focus", resetCityValidationOnFocus);

  const postalInput = document.querySelector("#billing-postal-code");
  postalInput?.addEventListener("blur", validatePostalOnBlur);
  postalInput?.addEventListener("focus", resetPostalValidationOnFocus);

  const countrySelect = document.querySelector("#billing-select");
  countrySelect?.addEventListener("blur", validateCountryOnBlur);
  countrySelect?.addEventListener("focus", resetCountryValidationOnFocus);
};

export default validateBillingAddress;
