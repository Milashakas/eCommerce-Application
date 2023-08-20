const validateLoginForm = () => {
  const form = document.querySelector(".login-form");

  form?.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    let isAnyFormError = false;

    const emailInput = document.getElementById("loginEmail") as HTMLInputElement;
    const passwordInput = document.getElementById("loginPassword") as HTMLInputElement;

    emailInput?.dispatchEvent(new Event("blur"));
    passwordInput?.dispatchEvent(new Event("blur"));

    const emailError = document.querySelector(".email-error");
    const passwordErrorText = document.querySelector(".password-error-text");

    if (emailError?.textContent || passwordErrorText?.textContent) {
      isAnyFormError = true;
    }

    if (isAnyFormError) return;

    console.log("Further part");
  });
};

export default validateLoginForm;
