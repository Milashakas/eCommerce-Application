import { FormPasswordInput } from "../components/common/FormInputs";

const LoginForm = () => {
  const view = `
  <div class="registration-login-page-container">
  <div class="registration-login-page-container-back"></div>
    <div class="form-container form-login-container">
      <div class="form-login-content">
        <div class="form-img">
          <div class="form-image-login"></div>
          <div class="form-img-text form-img-text-login">Warm welcome to our website.  <br> Such a pleasure to see you again!</div>
        </div>
      </div>
      <div class="form-data form-login-data">
        <form class="login-form">
          <h3 class="form-header">Login</h3>
          <div class="form-row">
            <div class="form-input">
              <label for="email" class="email-label required">Email</label>
              <input type="email" class="email-input" name="email" id="loginEmail" data-postId="email" autocomplete="email">
              <div class="email-error"></div>
              <span class="error-sign">
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
          </div>
          <div class="form-row">
            ${FormPasswordInput()}
          </div>
          <button type="submit" class="form-button login-button">Login</button>
          <p class="registration-doublecheck">Dont't have an account? <br> <a href="/signup" class="registration-link">Sign Up</a></p>
        </form>
      </div>
    </div>
    </div>
  `;
  return view;
};

export default LoginForm;
