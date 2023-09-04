const FormNameInput = () => {
  const view = `
    <div class="form-input">
      <label for="name" class="required">First Name</label>
      <input type="text" name="name" class="first-name" id="firstName" data-postId="firstName" autocomplete="username">
      <div class="first-name-error"></div>
      <span class="error-sign">
        <i class="fa-solid fa-circle-exclamation"></i>
      </span>
    </div>
  `;

  return view;
};

const formLastNameInput = () => {
  const view = `
    <div class="form-input">
      <label for="last-name" class="required">Last Name</label>
      <input type="text" name="last-name" class="last-name" id="lastName" data-postId="lastName" autocomplete="username">
      <div class="last-name-error"></div>
      <span class="error-sign">
        <i class="fa-solid fa-circle-exclamation"></i>
      </span>
    </div>
  `;

  return view;
};

const FormBirthDayInput = () => {
  const view = `
    <div class="form-input">
      <label for="dob" class="required">Date of Birth</label>
      <input name="dob" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" class="dob" id="dateOfBirth" data-postId="dateOfBirth">
      <div class="dob-error"></div>
      <span class="error-sign">
        <i class="fa-solid fa-circle-exclamation"></i>
      </span>
    </div>
  `;

  return view;
};

const FormEmailInput = () => {
  const view = `
   <div class="form-input">
      <label for="email" class="email-label required">Email</label>
      <input type="email" class="email-input" name="email" id="email" data-postId="email" autocomplete="email">
      <div class="email-error"></div>
      <span class="error-sign">
       <i class="fa-solid fa-circle-exclamation"></i>
      </span>
    </div>
  `;

  return view;
};

const FormPasswordInput = () => {
  const view = `
    <div class="form-input">
      <label for="password" class="required">Password</label>
      <input type="password" name="password" class="password-input" id="password" data-postId="password" autocomplete="current-password">
      <span class="btn-show-pass">
        <i class="fa-regular fa-eye-slash"></i>
      </span>
      <div class="password-error password-error-registration">
        <span class="password-error-text"></span>
        <div class="password-error-info" data-hint="Min 8 chars made from at least: 1 uppercase letter(A-Z), 1 lowercase letter(a-z), 1 number">
          <i class="fa-solid fa-circle-info"></i>
        </div>
      </div>
      <span class="password-error-sign">
        <i class="fa-solid fa-circle-exclamation"></i>
      </span>
    </div>
  `;

  return view;
};

export { FormNameInput, formLastNameInput, FormBirthDayInput, FormEmailInput, FormPasswordInput };
