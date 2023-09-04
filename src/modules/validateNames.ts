const displayFirstNameError = (message: string) => {
  const firstNameInput = document.querySelector(".first-name") as HTMLInputElement;
  const firstNameErrorText = document.querySelector(".first-name-error")!;
  const errorSign = firstNameErrorText.nextElementSibling as HTMLElement;

  firstNameErrorText.innerHTML = message;
  firstNameInput.classList.add("invalid");
  errorSign.style.display = "block";
};

const hideFirstNameError = () => {
  const firstNameInput = document.querySelector(".first-name") as HTMLInputElement;
  const firstNameErrorText = document.querySelector(".first-name-error")!;
  const errorSign = firstNameErrorText.nextElementSibling as HTMLElement;

  firstNameErrorText.innerHTML = "";
  firstNameInput.classList.remove("invalid");
  errorSign.style.display = "none";
};

const displayLastNameError = (message: string) => {
  const lastNameInput = document.querySelector(".last-name") as HTMLInputElement;
  const lastNameErrorText = document.querySelector(".last-name-error")!;
  const errorSign = lastNameErrorText.nextElementSibling as HTMLElement;

  lastNameErrorText.innerHTML = message;
  lastNameInput.classList.add("invalid");
  errorSign.style.display = "block";
};

const hideLastNameError = () => {
  const lastNameInput = document.querySelector(".last-name") as HTMLInputElement;
  const lastNameErrorText = document.querySelector(".last-name-error")!;
  const errorSign = lastNameErrorText.nextElementSibling as HTMLElement;

  lastNameErrorText.innerHTML = "";
  lastNameInput.classList.remove("invalid");
  errorSign.style.display = "none";
};

const validateFirstNameOnBlur = () => {
  const firstNameInput = document.querySelector(".first-name") as HTMLInputElement;
  const firstNameValue = firstNameInput.value;

  if (firstNameValue === "") {
    displayFirstNameError("First name is required");
  } else if (!/^[a-zA-Z]+$/.test(firstNameValue)) {
    displayFirstNameError("Should be at least one char and no special chars or numbers");
  } else {
    hideFirstNameError();
  }
};

const validateLastNameOnBlur = () => {
  const lastNameInput = document.querySelector(".last-name") as HTMLInputElement;
  const lastNameValue = lastNameInput.value;

  if (lastNameValue === "") {
    displayLastNameError("Last name is required");
  } else if (!/^[a-zA-Z]+$/.test(lastNameValue)) {
    displayLastNameError("Should be at least one char and no special chars or numbers");
  } else {
    hideLastNameError();
  }
};

const resetFirstNameValidationOnFocus = () => {
  const firstNameInput = document.querySelector(".first-name") as HTMLInputElement;

  if (firstNameInput.classList.contains("invalid")) {
    hideFirstNameError();
  }
};

const resetLastNameValidationOnFocus = () => {
  const lastNameInput = document.querySelector(".last-name") as HTMLInputElement;

  if (lastNameInput.classList.contains("invalid")) {
    hideLastNameError();
  }
};

const validateFirstName = () => {
  const firstNameInput = document.querySelector(".first-name") as HTMLInputElement;

  if (firstNameInput) {
    firstNameInput.addEventListener("blur", validateFirstNameOnBlur);
    firstNameInput.addEventListener("focus", resetFirstNameValidationOnFocus);
  }
};

const validateLastName = () => {
  const lastNameInput = document.querySelector(".last-name") as HTMLInputElement;

  if (lastNameInput) {
    lastNameInput.addEventListener("blur", validateLastNameOnBlur);
    lastNameInput.addEventListener("focus", resetLastNameValidationOnFocus);
  }
};

const validateNames = () => {
  validateFirstName();
  validateLastName();
};

export { validateFirstName, validateLastName, validateNames };
