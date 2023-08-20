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
          <div class="user-basic-info">
            <div class="form-row">
            <div class="form-input">
              <label for="name" class="required">First Name</label>
              <input type="text" name="name" class="first-name" id="firstName" data-postId="firstName" autocomplete="username">
              <div class="first-name-error"></div>
              <span class="error-sign">
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
            <div class="form-input">
              <label for="last-name" class="required">Last Name</label>
              <input type="text" name="last-name" class="last-name" id="lastName" data-postId="lastName" autocomplete="username">
              <div class="last-name-error"></div>
              <span class="error-sign">
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
          </div>
          <div class="form-row">
            <div class="form-input">
              <label for="dob" class="required">Date of Birth</label>
              <input name="dob" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" class="dob" id="dateOfBirth" data-postId="dateOfBirth">
              <div class="dob-error"></div>
              <span class="error-sign">
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
              </div>
          </div>
          <div class="form-row">
            <div class="form-input">
              <label for="email" class="email-label required">Email</label>
              <input type="email" class="email-input" name="email" id="email" data-postId="email" autocomplete="email">
              <div class="email-error"></div>
              <span class="error-sign">
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
            <div class="form-input">
              <label for="password" class="required">Password</label>
              <input type="password" name="password" class="password-input" id="password" data-postId="password" autocomplete="current-password">
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
