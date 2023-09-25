// eslint-disable-next-line max-len
export const displayPasswordError = (message: string, passwordInput: HTMLInputElement, passwordFieldId: string) => {
  const passwordErrorText = document.querySelector(`#${passwordFieldId} .password-error-text`)!;
  const errorSign = document.querySelector(`#${passwordFieldId} .password-error-sign`) as HTMLElement;
  const errorInfoSign = document.querySelector(`#${passwordFieldId} .password-error-info`) as HTMLElement;

  passwordErrorText.innerHTML = message;
  passwordInput.classList.add("invalid");
  errorSign.style.display = "block";
  errorInfoSign.style.display = "block";
};

export const hidePasswordError = (passwordInput: HTMLInputElement, passwordFieldId: string) => {
  const passwordErrorText = document.querySelector(`#${passwordFieldId} .password-error-text`)!;
  const errorSign = document.querySelector(`#${passwordFieldId} .password-error-sign`) as HTMLElement;
  const errorInfoSign = document.querySelector(`#${passwordFieldId} .password-error-info`) as HTMLElement;

  passwordErrorText.innerHTML = "";
  passwordInput.classList.remove("invalid");
  errorSign.style.display = "none";
  errorInfoSign.style.display = "none";
};

const validatePasswordOnBlur = (passwordInput: HTMLInputElement, passwordFieldId: string) => {
  const passwordValue = passwordInput.value;

  if (passwordValue === "") {
    displayPasswordError("Oops, you are missing a required field", passwordInput, passwordFieldId);
  } else if (passwordValue.trim() !== passwordValue) {
    displayPasswordError("Please delete leading or trailing whitespace", passwordInput, passwordFieldId);
  } else if (passwordValue.length < 8) {
    displayPasswordError("Password must be at least 8 characters long", passwordInput, passwordFieldId);
  } else if (!/[A-Z]/.test(passwordValue)) {
    displayPasswordError("Password must contain at least one uppercase letter (A-Z)", passwordInput, passwordFieldId);
  } else if (!/[a-z]/.test(passwordValue)) {
    displayPasswordError("Password must contain at least one lowercase letter (a-z)", passwordInput, passwordFieldId);
  } else if (!/\d/.test(passwordValue)) {
    displayPasswordError("Password must contain at least one digit", passwordInput, passwordFieldId);
  } else if (!passwordValue.match(/^[a-zA-Z\d!-_@#$%^&*.,:;]{8,}$/)) {
    displayPasswordError("The password doesn't meet the requirements", passwordInput, passwordFieldId);
  } else {
    hidePasswordError(passwordInput, passwordFieldId);
  }
};

const resetValidationOnFocus = (passwordInput: HTMLInputElement, passwordFieldId: string) => {
  if (passwordInput.classList.contains("invalid")) {
    hidePasswordError(passwordInput, passwordFieldId);
  }
};

const validatePassword = () => {
  // eslint-disable-next-line no-undef
  const passwordInputs = document.querySelectorAll(".password-input") as NodeListOf<HTMLInputElement>;

  passwordInputs.forEach((passwordInput: HTMLInputElement) => {
    const passwordFieldId = passwordInput.parentElement?.id as string;
    passwordInput.addEventListener("blur", () => {
      validatePasswordOnBlur(passwordInput, passwordFieldId);
    });
    passwordInput.addEventListener("focus", () => {
      resetValidationOnFocus(passwordInput, passwordFieldId);
    });
  });
};

export default validatePassword;
