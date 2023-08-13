import { insertSelectOptions } from "../modules/setShippingAddressData";

const BillingAddressBlock = () => {
  const view: string = `
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
        <input type="text" name="city" id="billing-city" pattern:"^[a-zA-Z]+$" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-input">
        <label for="postal-code" class="required">Postal Code</label>
        <input type="text" name="postal-code" id="billing-postal-code" pattern:"^[a-zA-Z0-9 ]+$" required>
      </div>
      <div class="form-input">
        <label for="country" class="required">Country</label>
        <select class="country-select" id="billing-select" required>
          ${insertSelectOptions()}
        </select>
      </div>
    </div>
  </div>
  `;
  return view;
};

export default BillingAddressBlock;
