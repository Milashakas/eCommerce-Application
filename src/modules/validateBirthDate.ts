const displayDOBError = (message: string) => {
  const dobInput = document.querySelector("#dob") as HTMLInputElement;
  const dobErrorText = document.querySelector(".dob-error")!;
  const errorSign = dobErrorText.nextElementSibling as HTMLElement;

  dobErrorText.innerHTML = message;
  dobInput.classList.add("invalid");
  errorSign.style.display = "block";
};

const hideDOBError = () => {
  const dobInput = document.querySelector("#dob") as HTMLInputElement;
  const dobErrorText = document.querySelector(".dob-error")!;
  const errorSign = dobErrorText.nextElementSibling as HTMLElement;

  dobErrorText.innerHTML = "";
  dobInput.classList.remove("invalid");
  errorSign.style.display = "none";
};

const validateDOBOnBlur = () => {
  const dobInput = document.querySelector("#dob") as HTMLInputElement;
  const dobValue = dobInput.value;
  const today = new Date();
  const birthDate = new Date(dobValue);
  const age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (dobValue === "") {
    displayDOBError("Date of Birth is required");
  } else if (birthDate > today) {
    displayDOBError("The date can not be in the future");
  } else if (age < 13 || (age === 13 && month < 0)) {
    displayDOBError("You should be at least 13 years old");
  } else {
    hideDOBError();
  }
};

const resetDOBValidationOnFocus = () => {
  const dobInput = document.querySelector("#dob") as HTMLInputElement;

  if (dobInput.classList.contains("invalid")) {
    hideDOBError();
  }
};

const validateDOB = () => {
  const dobInput = document.querySelector("#dob") as HTMLInputElement;

  if (dobInput) {
    dobInput.addEventListener("blur", validateDOBOnBlur);
    dobInput.addEventListener("focus", resetDOBValidationOnFocus);
  }
};

export default validateDOB;
