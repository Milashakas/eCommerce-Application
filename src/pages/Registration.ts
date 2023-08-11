const countries = [
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

function insertSelectOptions(array: string[]): string {
  return array.map((country) => `<option value="${country}">${country}</option>`).join("");
}

function renderFormAddressBillingBlock() {
  return `
  <div class="billing-address-block">
    <h4 class="form-subheader">Billing Address:</h4>
    <div class="form-row">
      <div class="form-input">
        <label for="address" class="required">Street</label>
        <input type="text" name="address" id="billing-street" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-input">
        <label for="house-number">Building #</label>
        <input type="text" name="building-number" id="billing-building-number">
      </div>
      <div class="form-input">
        <label for="apartment-number">Apt #</label>
        <input type="text" name="apartment-number" id="billing-apartment-number">
      </div>
      <div class="form-input">
        <label for="city" class="required">City</label>
        <input type="text" name="city" id="billing-city" pattern: "^[a-zA-Z]+$" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-input">
        <label for="postal-code" class="required">Postal Code</label>
        <input type="text" name="postal-code" id="billing-postal-code" pattern: "^[a-zA-Z0-9 ]+$" required>
      </div>
      <div class="form-input">
        <label for="country" class="required">Country</label>
        <select class="country-select" id="billing-select" required>
          ${insertSelectOptions(countries)}
        </select>
      </div>
    </div>
  </div>
  `;
}

function renderFormAddressShippingBlock() {
  return `
  <div class="shipping-address-block">
    <h4 class="form-subheader">Shipping Address:</h4>
    <div class="form-row">
      <div class="form-input">
        <label for="address" class="required">Street</label>
        <input type="text" name="address" id="shipping-street" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-input">
        <label for="house-number">Building #</label>
        <input type="text" name="building-number" id="shipping-building-number">
      </div>
      <div class="form-input">
        <label for="apartment-number">Apt #</label>
        <input type="text" name="apartment-number" id="shipping-apartment-number">
      </div>
      <div class="form-input">
        <label for="city" class="required">City</label>
        <input type="text" name="city" id="shipping-city" pattern: "^[a-zA-Z]+$" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-input">
        <label for="postal-code" class="required">Postal Code</label>
        <input type="text" name="postal-code" id="shipping-postal-code" pattern: "^[a-zA-Z0-9 ]+$" required>
      </div>
      <div class="form-input">
        <label for="country" class="required">Country</label>
        <select class="country-select" id="shipping-select" required>
          ${insertSelectOptions(countries)}
        </select>
      </div>
    </div>
  </div>
  `;
}

function copyBillingValuesToShipping() {
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
}

function handleSameShippingChange(e: Event) {
  const target = e.target as HTMLInputElement;

  const existingShippingBlock = document.querySelector(".shipping-address-block");
  if (existingShippingBlock) {
    existingShippingBlock.remove();
  }

  const formButton = document.querySelector(".form-button");
  const shippingBlock = renderFormAddressShippingBlock();

  if (target.id === "yes") {
    formButton?.insertAdjacentHTML("beforebegin", shippingBlock);
    copyBillingValuesToShipping();
  } else if (target.id === "no") {
    formButton?.insertAdjacentHTML("beforebegin", shippingBlock);
  }
}

function initSameShippingListener() {
  const sameShippingRadios = document.querySelectorAll("input[name='sameShipping']");
  sameShippingRadios.forEach((radio) => {
    radio.addEventListener("change", handleSameShippingChange);
  });
}

export default function renderRegistrationForm() {
  const registrationHtml = `
    <div class="form-content">
      <div class="form-img">
        <div class="form-image"></div>
        <div class="form-img-text">Looks like you are new here! <br> Feel free to join us</div>
      </div>
    </div>
    <div class="form-data">
      <form class="registration-form">
        <h3 class="form-header">Registration Form</h3>
        <div class="form-row">
          <div class="form-input">
            <label for="name" class="required">Name</label>
            <input type="text" name="name" id="name" required>
          </div>
          <div class="form-input">
            <label for="last-name" class="required">Last Name</label>
            <input type="text" name="last-name" id="last-name" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-input">
            <label for="dob" class="required">Date of Birth</label>
            <input name="dob" type="text" required onfocus="(this.type='date')" onblur="(this.type='text')" id="dob">
          </div>
        </div>
        <div class="form-row">
          <div class="form-input">
            <label for="email" class="required">Email</label>
            <input type="email" name="email" id="email" required>
          </div>
          <div class="form-input">
            <label for="password" class="required">Password</label>
            <input type="password" name="password" id="password" required>
          </div>
        </div>
        ${renderFormAddressBillingBlock()}
        <div class="form-row radio-row">
          <label for="gender" class="radio-label required">Do you have the same shipping address?</label>
          <div class="form-radio-item">
            <input type="radio" name="sameShipping" id="yes">
            <label for="yes">Yes</label>
            <span class="check"></span>
          </div>
          <div class="form-radio-item">
            <input type="radio" name="sameShipping" id="no">
            <label for="no">No</label>
            <span class="check"></span>
          </div>
        </div>
        <button type="submit" class="form-button">Register Now</button>
      </form>
    </div>
  `;
  const div = document.createElement("div");
  div.classList.add("form-container");
  div.innerHTML = registrationHtml;
  document.body.appendChild(div);
  initSameShippingListener();
}
