// Components
import BillingAddressBlock from "../components/BillingAddressBlock";
import {
  FormNameInput,
  formLastNameInput,
  FormBirthDayInput,
  FormEmailInput,
  FormPasswordInput,
} from "../components/common/FormInputs";

const RegistrationForm = () => {
  const view = `
  <div class="registration-login-page-container">
  <div class="registration-login-page-container-back"></div>
    <div class="form-container">
      <div class="form-content">
        <div class="form-img">
          <div class="form-image"></div>
          <div class="form-img-text">Looks like you are new here! <br> Feel free to join us</div>
        </div>
      </div>
      <div class="form-data">
        <form class="registration-form">
          <h3 class="form-header">Registration Form</h3>
          <div class="user-basic-info">
            <div class="form-row">
            ${FormNameInput()}
            ${formLastNameInput()}
          </div>
          <div class="form-row">
            ${FormBirthDayInput()}
          </div>
          <div class="form-row">
            ${FormEmailInput()}
            ${FormPasswordInput()}
          </div>
          </div>
          ${BillingAddressBlock()}
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
            <span class="error-sign radio-error-sign">
              <i class="fa-solid fa-circle-exclamation"></i>
            </span>
          </div>
          <div class="radio-error"></div>
          <button type="submit" class="form-button">Register Now</button>
          <p class="registration-doublecheck">Already have your account? <br> <a href="/login" class="login-link">Log In</a></p>
        </form>
      </div>
    </div>
  </div>
  `;
  return view;
};

export default RegistrationForm;
