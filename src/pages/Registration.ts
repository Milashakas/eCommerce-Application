import BillingAddressBlock from "../components/BillingAddressBlock";

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
          <div class="form-row">
            <div class="form-input">
              <label for="name" class="required">First Name</label>
              <input type="text" name="name" id="name" autocomplete="username" pattern ="^[a-zA-Z]+$"required>
              <div class="first-name-error"></div>
              <span class="error-sign">
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
            <div class="form-input">
              <label for="last-name" class="required">Last Name</label>
              <input type="text" name="last-name" id="last-name" autocomplete="username" pattern ="^[a-zA-Z]+$" required>
              <div class="last-name-error"></div>
              <span class="error-sign">
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
          </div>
          <div class="form-row">
            <div class="form-input">
              <label for="dob" class="required">Date of Birth</label>
              <input name="dob" type="text" required onfocus="(this.type='date')" onblur="(this.type='text')" id="dob">
              <div class="dob-error"></div>
              <span class="error-sign">
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
              </div>
          </div>
          <div class="form-row">
            <div class="form-input">
              <label for="email" class="email-label required">Email</label>
              <input type="email" class="email-input required" name="email" id="email" autocomplete="email" required>
              <div class="email-error"></div>
              <span class="error-sign">
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
            <div class="form-input">
              <label for="password" class="required">Password</label>
              <input type="password" name="password" class="password-input" id="password" autocomplete="current-password" pattern ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$" required>
              <span class="btn-show-pass">
                <i class="fa-regular fa-eye-slash"></i>
              </span>
              <div class="password-error password-error-registration">
                <span class="password-error-text"></span>
                <div class="password-error-info" data-hint="Min 8 chars and at least: 1 uppercase letter, 1 lowercase letter, 1 number">
                  <i class="fa-solid fa-circle-info"></i>
                </div>
              </div>
              <span class="password-error-sign">
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
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
          </div>
          <button type="submit" class="form-button">Register Now</button>
          <p class="registration-doublecheck">Already have your account? <br> <a href="#" class="login-link">Log In</a></p>
        </form>
      </div>
    </div>
  </div>
  `;
  return view;
};

export default RegistrationForm;
