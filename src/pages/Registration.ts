const countries = [
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

function addBillingAddressFields(targetForm: HTMLElement, copyValues = false) {
  // Address: Street
  const billingStreetInput = document.createElement("input");
  billingStreetInput.placeholder = "Street";
  billingStreetInput.required = true;
  if (copyValues) {
    const streetElement = targetForm.querySelector("input[placeholder='Street']");
    if (streetElement instanceof HTMLInputElement) {
      billingStreetInput.value = streetElement.value;
    }
  }
  targetForm.appendChild(billingStreetInput);

  // Address: City
  const billingCityInput = document.createElement("input");
  billingCityInput.placeholder = "City";
  billingCityInput.pattern = "^[a-zA-Z]+$";
  billingCityInput.required = true;
  if (copyValues) {
    const cityElement = targetForm.querySelector("input[placeholder='City']");
    if (cityElement instanceof HTMLInputElement) {
      billingCityInput.value = cityElement.value;
    }
  }
  targetForm.appendChild(billingCityInput);

  // Address: Postal Code
  const billingPostalCodeInput = document.createElement("input");
  billingPostalCodeInput.placeholder = "Postal Code";
  billingPostalCodeInput.pattern = "^[a-zA-Z0-9 ]+$";
  billingPostalCodeInput.required = true;
  if (copyValues) {
    const postalCodeElement = targetForm.querySelector("input[placeholder='Postal Code']");
    if (postalCodeElement instanceof HTMLInputElement) {
      billingPostalCodeInput.value = postalCodeElement.value;
    }
  }
  targetForm.appendChild(billingPostalCodeInput);

  // Address: Country
  const billingCountrySelect = document.createElement("select");
  const defaultOption2 = document.createElement("option");
  defaultOption2.textContent = "Select Country";
  billingCountrySelect.appendChild(defaultOption2);

  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    billingCountrySelect.appendChild(option);
  });
  if (copyValues) {
    const countrySelectElement = targetForm.querySelector("select");
    if (countrySelectElement instanceof HTMLSelectElement) {
      billingCountrySelect.value = countrySelectElement.value;
    }
  }
  targetForm.appendChild(billingCountrySelect);
}

export default function renderRegistrationPage(): HTMLElement {
  // Creating form element
  const form = document.createElement("form");
  form.id = "registrationForm";

  const formTitle = document.createElement("h3");
  formTitle.classList.add("form-title");
  formTitle.textContent = "Looks like you are new here! Feel free to join us";
  form.appendChild(formTitle);

  // Email
  const emailInput = document.createElement("input");
  emailInput.classList.add("email-input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";
  emailInput.required = true;
  form.appendChild(emailInput);

  // Password
  const passwordInput = document.createElement("input");
  passwordInput.classList.add("password-input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Password";
  passwordInput.pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"; // Basic validation
  passwordInput.required = true;
  form.appendChild(passwordInput);

  // First Name
  const firstNameInput = document.createElement("input");
  firstNameInput.classList.add("first-name-input");
  firstNameInput.placeholder = "First Name";
  firstNameInput.pattern = "^[a-zA-Z]+$";
  firstNameInput.required = true;
  form.appendChild(firstNameInput);

  // Last Name
  const lastNameInput = document.createElement("input");
  lastNameInput.classList.add("last-name-input");
  lastNameInput.placeholder = "Last Name";
  lastNameInput.pattern = "^[a-zA-Z]+$";
  lastNameInput.required = true;
  form.appendChild(lastNameInput);

  // Date of Birth
  const dobInput = document.createElement("input");
  dobInput.classList.add("birth-input");
  dobInput.type = "date";
  dobInput.required = true;
  form.appendChild(dobInput);

  const subTitleShipping = document.createElement("h4");
  subTitleShipping.classList.add("form-subtitle");
  subTitleShipping.textContent = "Your Shipping Address";
  form.appendChild(subTitleShipping);

  // Address: Street
  const streetInput = document.createElement("input");
  streetInput.classList.add("street-input");
  streetInput.placeholder = "Street";
  streetInput.required = true;
  form.appendChild(streetInput);

  // Address: City
  const cityInput = document.createElement("input");
  cityInput.classList.add("city-input");
  cityInput.placeholder = "City";
  cityInput.pattern = "^[a-zA-Z]+$";
  cityInput.required = true;
  form.appendChild(cityInput);

  // Address: Postal Code
  const postalCodeInput = document.createElement("input");
  postalCodeInput.classList.add("postal-code-input");
  postalCodeInput.placeholder = "Postal Code";
  postalCodeInput.pattern = "^[a-zA-Z0-9 ]+$";
  postalCodeInput.required = true;
  form.appendChild(postalCodeInput);

  // Address: Country
  const countrySelect = document.createElement("select");
  countrySelect.classList.add("country-select");
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select Country";
  countrySelect.appendChild(defaultOption);

  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
  form.appendChild(countrySelect);

  const subTitleBilling = document.createElement("h4");
  subTitleBilling.classList.add("form-subtitle");
  subTitleBilling.textContent = "Your Billing Address";
  form.appendChild(subTitleBilling);

  // Radio button: Same as Shipping Address
  const radio1Label = document.createElement("label");
  const radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.name = "addressType";
  radio1.value = "same";
  radio1.id = "sameAsShipping";
  radio1Label.htmlFor = radio1.id;
  radio1Label.appendChild(radio1);
  radio1Label.appendChild(document.createTextNode("Same as Shipping Address"));
  form.appendChild(radio1Label);

  // Radio button: Differs from Shipping Address
  const radio2Label = document.createElement("label");
  const radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.name = "addressType";
  radio2.value = "different";
  radio2.id = "differsFromShipping";
  radio2Label.htmlFor = radio2.id;
  radio2Label.appendChild(radio2);
  radio2Label.appendChild(document.createTextNode("Differs from Shipping Address"));
  form.appendChild(radio2Label);

  // Submit Button
  const submitButton = document.createElement("button");
  submitButton.classList.add("form-button");
  submitButton.textContent = "Register";
  form.appendChild(submitButton);

  document.body.appendChild(form);

  radio2.addEventListener("change", () => {
    if (radio2.checked) {
      addBillingAddressFields(form);
    }
  });

  radio1.addEventListener("change", () => {
    if (radio1.checked) {
      addBillingAddressFields(form, true);
    }
  });

  return form;
}
