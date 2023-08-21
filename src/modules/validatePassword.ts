export const displayPasswordError = (message: string) => {
  const passwordInput = document.querySelector(".password-input") as HTMLInputElement;
  const passwordErrorText = document.querySelector(".password-error-text")!;
  const errorSign = document.querySelector(".password-error-sign") as HTMLElement;
  const errorInfoSign = document.querySelector(".password-error-info") as HTMLElement;

  passwordErrorText.innerHTML = message;
  passwordInput.classList.add("invalid");
  errorSign.style.display = "block";
  errorInfoSign.style.display = "block";
};

export const hidePasswordError = () => {
  const passwordInput = document.querySelector(".password-input") as HTMLInputElement;
  const passwordErrorText = document.querySelector(".password-error-text")!;
  const errorSign = document.querySelector(".password-error-sign") as HTMLElement;
  const errorInfoSign = document.querySelector(".password-error-info") as HTMLElement;

  passwordErrorText.innerHTML = "";
  passwordInput.classList.remove("invalid");
  errorSign.style.display = "none";
  errorInfoSign.style.display = "none";
};

const validatePasswordOnBlur = () => {
  const passwordInput = document.querySelector(".password-input") as HTMLInputElement;
  const passwordValue = passwordInput.value;

  if (passwordValue === "") {
    displayPasswordError("Oops, you are missing a required field");
  } else if (passwordValue.trim() !== passwordValue) {
    displayPasswordError("Please delete leading or trailing whitespace");
  } else if (passwordValue.length < 8) {
    displayPasswordError("Password must be at least 8 characters long");
  } else if (!/[A-Z]/.test(passwordValue)) {
    displayPasswordError("Password must contain at least one uppercase letter (A-Z)");
  } else if (!/[a-z]/.test(passwordValue)) {
    displayPasswordError("Password must contain at least one lowercase letter (a-z)");
  } else if (!/\d/.test(passwordValue)) {
    displayPasswordError("Password must contain at least one digit");
  } else if (!passwordValue.match(/^[a-zA-Z\d!-_@#$%^&*.,:;]{8,}$/)) {
    displayPasswordError("The password doesn't meet the requirements");
  } else {
    hidePasswordError();
  }
};

const resetValidationOnFocus = () => {
  const passwordInput = document.querySelector(".password-input") as HTMLInputElement;

  if (passwordInput.classList.contains("invalid")) {
    hidePasswordError();
  }
};

const validatePassword = () => {
  const passwordInput = document.querySelector(".password-input") as HTMLInputElement;

  if (passwordInput) {
    passwordInput.addEventListener("blur", validatePasswordOnBlur);
    passwordInput.addEventListener("focus", resetValidationOnFocus);
  }
};

export default validatePassword;
