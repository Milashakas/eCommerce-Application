export const displayEmailError = (message: string) => {
  const emailInput = document.querySelector(".email-input") as HTMLInputElement;
  const emailError = document.querySelector(".email-error")!;
  const emailErrorSign = document.querySelector(".email-error-sign") as HTMLElement;

  emailError.innerHTML = message;
  emailInput.classList.add("invalid");
  emailErrorSign.style.display = "block";
};

export const hideEmailError = () => {
  const emailInput = document.querySelector(".email-input") as HTMLInputElement;
  const emailError = document.querySelector(".email-error")!;
  const emailErrorSign = document.querySelector(".email-error-sign") as HTMLElement;

  emailError.innerHTML = "";
  emailInput.classList.remove("invalid");
  emailErrorSign.style.display = "none";
};

const validateEmailOnBlur = () => {
  const emailInput = document.querySelector(".email-input") as HTMLInputElement;
  const emailValue = emailInput.value;

  if (emailValue === "") {
    displayEmailError("Oops, you are missing a required field");
  } else if (!emailValue.match(/^\s+|\s+$/)) {
    displayEmailError("Please delete leading or trailing whitespace");
  } else if (!emailValue.includes("@")) {
    displayEmailError("Email address must contain an '@' symbol");
  } else if (!emailValue.split("@")[1] || emailValue.split("@")[1].split(".").length < 2) {
    displayEmailError("Your email is missing a domain name");
  } else if (!emailValue.match(/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
    displayEmailError("Please enter a valid email (e.g., user@example.com)");
  } else {
    hideEmailError();
  }
};

const resetValidationOnFocus = () => {
  const emailInput = document.querySelector(".email-input") as HTMLInputElement;

  if (emailInput.classList.contains("invalid")) {
    hideEmailError();
  }
};

const validateEmail = () => {
  const emailInput = document.querySelector(".email-input") as HTMLInputElement;

  if (emailInput) {
    emailInput.addEventListener("blur", validateEmailOnBlur);
    emailInput.addEventListener("focus", resetValidationOnFocus);
  }
};

export default validateEmail;
