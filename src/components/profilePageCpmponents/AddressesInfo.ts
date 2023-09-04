/* eslint-disable max-len */
import ProfileInfoField from "../common/ProfileInfoField";
import { IAdressessInfo } from "../../interfaces/IProfile";

import { countries } from "../../modules/setShippingAddressData";

interface ICountryObj {
  name: string;
  code: string;
}

const AddressesInfo = (addressesData: IAdressessInfo) => {
  const billingAddress = addressesData.addresses[0];
  const shippingAddress = addressesData.addresses[1];

  const billingCountry = countries.find((countryObj: ICountryObj) => countryObj.code === billingAddress.country);
  const shippingCountry = countries.find((countryObj: ICountryObj) => countryObj.code === shippingAddress.country);

  const view = `
    <h2>Billing Address</h2>

    <div class="billing-address-field">
      ${ProfileInfoField("Country", billingCountry?.name as string)}
      ${ProfileInfoField("City", billingAddress.city)}    
      ${ProfileInfoField("Street", billingAddress.streetName)}
    </div>
    <div class="billing-address-field">
      ${ProfileInfoField("Postal Code", billingAddress.postalCode)}
      ${ProfileInfoField("Street", billingAddress.streetName)}
    </div>

    <hr/>

    <h2>Shipping Address</h2>

    <div class="shipping-address-field">
      ${ProfileInfoField("Country", shippingCountry?.name as string)}
      ${ProfileInfoField("City", shippingAddress.city)}
      ${ProfileInfoField("Street", shippingAddress.streetName)}
    </div>
    <div class="shipping-address-field">
      ${ProfileInfoField("Postal Code", shippingAddress.postalCode)}
      ${ProfileInfoField("Street", shippingAddress.streetName)}
    </div>
  `;

  return view;
};

export default AddressesInfo;
