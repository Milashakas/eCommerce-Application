import BillingAddressBlock from "../components/BillingAddressBlock";

const renderRegistrationForm = () => {
  const view = `
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
              <input type="text" name="name" id="name" autocomplete="username" required>
            </div>
            <div class="form-input">
              <label for="last-name" class="required">Last Name</label>
              <input type="text" name="last-name" id="last-name" autocomplete="username" required>
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
              <input type="email" name="email" id="email" autocomplete="email" required>
            </div>
            <div class="form-input">
              <label for="password" class="required">Password</label>
              <input type="password" name="password" id="password" autocomplete="current-password" required>
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
        </form>
      </div>
    </div>
  `;
  return view;
};

const insertRegistrationFormIntoMain = () => {
  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = renderRegistrationForm();
  } else {
    console.error("<main> element not found!");
  }
};

export default insertRegistrationFormIntoMain;
