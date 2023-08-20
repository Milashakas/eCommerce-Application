import { insertSelectOptions } from "../modules/setShippingAddressData";

const BillingAddressBlock = () => {
  const view: string = `
  <div class="billing-address-block">
    <h4 class="form-subheader">Billing Address:</h4>
    <div class="form-row">
      <div class="form-input">
        <label for="address" class="required">Street</label>
        <input type="text" name="address" class="billing-street" id="billingStreetName" data-postId="streetName">
        <div class="street-error"></div>
        <span class="error-sign">
          <i class="fa-solid fa-circle-exclamation"></i>
        </span>
      </div>
    </div>
    <div class="form-row form-row-triple">
      <div class="form-input first-input">
        <label for="building-number">Building #</label>
        <input type="text" name="building-number" class="billing-building-number" id="billingBuilding" data-postId="building">
      </div>
      <div class="form-input second-input">
        <label for="apartment-number">Apt #</label>
        <input type="text" name="apartment-number" class="billing-apartment-number" id="billingApartment" data-postId="apartment">
      </div>
      <div class="form-input third-input">
        <label for="city" class="required">City</label>
        <input type="text" name="city" class="billing-city" id="billingCity" data-postId="city">
        <div class="city-error"></div>
        <span class="error-sign">
          <i class="fa-solid fa-circle-exclamation"></i>
        </span>
      </div>
    </div>
    <div class="form-row">
      <div class="form-input">
        <label for="postal-code" class="required">Postal Code</label>
        <input type="text" name="postal-code" class="billing-postal-code" id="billingPostalCode" data-postId="postalCode">
        <div class="postal-error"></div>
        <span class="error-sign">
          <i class="fa-solid fa-circle-exclamation"></i>
        </span>
      </div>
      <div class="form-input">
        <label for="country" class="required">Country</label>
        <select class="billing-country" id="billingCountry" data-postId="country">
          ${insertSelectOptions()}
        </select>
        <div class="select-error"></div>
        <span class="error-sign">
          <i class="fa-solid fa-circle-exclamation"></i>
        </span>
      </div>
    </div>
  </div>
  `;
  return view;
};

export default BillingAddressBlock;
