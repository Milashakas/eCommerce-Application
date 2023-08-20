import { insertSelectOptions } from "../modules/setShippingAddressData";

const ShippingAddressBlock = () => {
  const view: string = `
  <div class="shipping-address-block">
    <h4 class="form-subheader">Shipping Address:</h4>
    <div class="form-row">
      <div class="form-input">
        <label for="address" class="required">Street</label>
        <input type="text" name="address" class="shipping-street" id="streetName">
        <div class="shipping-street-error"></div>
        <span class="error-sign">
          <i class="fa-solid fa-circle-exclamation"></i>
        </span>
      </div>
    </div>
    <div class="form-row">
      <div class="form-input">
        <label for="house-number">Building #</label>
        <input type="text" name="building-number" class="shipping-building-number" id="building">
      </div>
      <div class="form-input">
        <label for="apartment-number">Apt #</label>
        <input type="text" name="apartment-number" class="shipping-apartment-number" id="apartment">
      </div>
      <div class="form-input">
        <label for="city" class="required">City</label>
        <input type="text" name="city" class="shipping-city" id="city">
        <div class="shipping-city-error"></div>
        <span class="error-sign">
          <i class="fa-solid fa-circle-exclamation"></i>
        </span>
      </div>
    </div>
    <div class="form-row">
      <div class="form-input">
        <label for="postal-code" class="required">Postal Code</label>
        <input type="text" name="postal-code" class="shipping-postal-code" id="postalCode">
        <div class="shipping-postal-error"></div>
        <span class="error-sign">
          <i class="fa-solid fa-circle-exclamation"></i>
        </span>
      </div>
      <div class="form-input">
        <label for="country" class="required">Country</label>
        <select name="country" class="shipping-country" id="country">
          ${insertSelectOptions()}
        </select>
        <div class="shipping-select-error"></div>
        <span class="error-sign">
          <i class="fa-solid fa-circle-exclamation"></i>
        </span>
      </div>
    </div>
  </div>
  `;
  return view;
};

export default ShippingAddressBlock;