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

function createInput({
  type = "text",
  className,
  placeholder,
  pattern,
  required = false,
}: {
  type?: string;
  className?: string;
  placeholder?: string;
  pattern?: string;
  required?: boolean;
}): HTMLInputElement {
  const input = document.createElement("input");
  input.type = type;
  if (className) input.classList.add(className);
  if (placeholder) input.placeholder = placeholder;
  if (pattern) input.pattern = pattern;
  if (required) input.required = required;
  return input;
}

function createCountrySelect(countriesArray: string[]): HTMLSelectElement {
  const select = document.createElement("select");
  select.classList.add("country-select");

  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select Country";
  select.appendChild(defaultOption);

  countriesArray.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
  });

  return select;
}

function renderFormAddressBlock(form: HTMLElement, countriesArray: string[]): void {
  const streetInput = createInput({
    className: "street-input",
    placeholder: "Street",
    required: true,
  });
  form.appendChild(streetInput);

  const cityInput = createInput({
    className: "city-input",
    placeholder: "City",
    pattern: "^[a-zA-Z]+$",
    required: true,
  });
  form.appendChild(cityInput);

  const postalCodeInput = createInput({
    className: "postal-code-input",
    placeholder: "Postal Code",
    pattern: "^[a-zA-Z0-9 ]+$",
    required: true,
  });
  form.appendChild(postalCodeInput);

  const countrySelect = createCountrySelect(countriesArray);
  form.appendChild(countrySelect);
}

function copyValuesToInputs(sourceForm: HTMLElement, targetForm: HTMLElement) {
  const inputsToCopy = ["Street", "City", "Postal Code"];
  inputsToCopy.forEach((placeholder) => {
    const sourceElement = sourceForm.querySelector(`input[placeholder='${placeholder}']`);
    const targetElement = targetForm.querySelector(`input[placeholder='${placeholder}']`);

    if (sourceElement instanceof HTMLInputElement && targetElement instanceof HTMLInputElement) {
      targetElement.value = sourceElement.value;
    }
  });

  const sourceCountry = sourceForm.querySelector("select");
  const targetCountry = targetForm.querySelector(".country-select:last-of-type");
  if (sourceCountry instanceof HTMLSelectElement && targetCountry instanceof HTMLSelectElement) {
    targetCountry.value = sourceCountry.value;
  }
}

function removeExistingBillingAddress(form: HTMLElement): void {
  const existingBillingBlock = form.querySelector(".billing-address");
  if (existingBillingBlock) {
    form.removeChild(existingBillingBlock);
  }
}

function addBillingAddressFields(targetForm: HTMLElement, copyValues = false) {
  removeExistingBillingAddress(targetForm);
  const billingAddressContainer = document.createElement("div");
  billingAddressContainer.classList.add("billing-address");
  renderFormAddressBlock(billingAddressContainer, countries);
  if (copyValues) {
    copyValuesToInputs(targetForm, billingAddressContainer);
  }
  const submitButton = targetForm.querySelector(".form-button");
  targetForm.insertBefore(billingAddressContainer, submitButton);
}

function renderFormMainBlock(form: HTMLElement): void {
  const emailInput = createInput({
    type: "email",
    className: "email-input",
    placeholder: "Email",
    required: true,
  });
  form.appendChild(emailInput);

  const passwordInput = createInput({
    type: "password",
    className: "password-input",
    placeholder: "Password",
    pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$",
    required: true,
  });
  form.appendChild(passwordInput);

  const firstNameInput = createInput({
    className: "first-name-input",
    placeholder: "First Name",
    pattern: "^[a-zA-Z]+$",
    required: true,
  });
  form.appendChild(firstNameInput);

  const lastNameInput = createInput({
    className: "last-name-input",
    placeholder: "Last Name",
    pattern: "^[a-zA-Z]+$",
    required: true,
  });
  form.appendChild(lastNameInput);

  const dobInput = createInput({
    type: "date",
    className: "birth-input",
    required: true,
  });
  form.appendChild(dobInput);
}

function createRadioBtn(name: string, value: string, id: string, labelText: string): HTMLElement {
  const label = document.createElement("label");
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = name;
  radio.value = value;
  radio.id = id;
  label.htmlFor = radio.id;
  label.appendChild(radio);
  label.appendChild(document.createTextNode(labelText));
  return label;
}

export default function renderRegistrationPage(): HTMLElement {
  const form = document.createElement("form");
  form.id = "registrationForm";

  const formTitle = document.createElement("h3");
  formTitle.classList.add("form-title");
  formTitle.textContent = "Looks like you are new here! Feel free to join us";
  form.appendChild(formTitle);

  renderFormMainBlock(form);

  const subTitleShipping = document.createElement("h4");
  subTitleShipping.classList.add("form-subtitle");
  subTitleShipping.textContent = "Your Shipping Address";
  form.appendChild(subTitleShipping);

  renderFormAddressBlock(form, countries);

  const subTitleBilling = document.createElement("h4");
  subTitleBilling.classList.add("form-subtitle");
  subTitleBilling.textContent = "Your Billing Address";
  form.appendChild(subTitleBilling);

  const sameAsShippingRadio = createRadioBtn("addressType", "same", "sameAsShipping", "Same as Shipping Address");
  form.appendChild(sameAsShippingRadio);

  const differsFromShippingRadio = createRadioBtn(
    "addressType",
    "different",
    "differsFromShipping",
    "Differs from Shipping Address",
  );
  form.appendChild(differsFromShippingRadio);

  const submitButton = document.createElement("button");
  submitButton.classList.add("form-button");
  submitButton.textContent = "Register";
  form.appendChild(submitButton);

  document.body.appendChild(form);

  const radio2 = differsFromShippingRadio.querySelector("input");
  if (radio2) {
    radio2.addEventListener("change", () => {
      if (radio2.checked) {
        addBillingAddressFields(form);
      }
    });
  }

  const radio1 = sameAsShippingRadio.querySelector("input");
  if (radio1) {
    radio1.addEventListener("change", () => {
      if (radio1.checked) {
        addBillingAddressFields(form, true);
      }
    });
  }
  return form;
}
