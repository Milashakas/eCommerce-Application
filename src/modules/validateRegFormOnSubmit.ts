import createCustomerProfile from "../controllers/createCustomerProfile";

const validateRegistrationForm = () => {
  const form = document.querySelector(".registration-form");
  const radioError = document.querySelector(".radio-error")!;

  form?.addEventListener("submit", async (event: Event) => {
    event.preventDefault();
    let isAnyFormError = false;
    [
      ".first-name",
      ".last-name",
      ".email-input",
      ".dob",
      ".password-input",
      ".billing-street",
      ".billing-city",
      ".billing-postal-code",
      ".billing-country",
    ].forEach((selector) => {
      const element = document.querySelector(selector) as HTMLInputElement;
      element?.dispatchEvent(new Event("blur"));
    });

    const radioYes = document.getElementById("yes") as HTMLInputElement;
    const radioNo = document.getElementById("no") as HTMLInputElement;

    if (!radioYes.checked && !radioNo.checked) {
      radioError.textContent = "Please choose one of the options";
    } else {
      radioError.textContent = "";
    }

    const errors = document.querySelectorAll(
      ".first-name-error, .last-name-error, .dob-error, .email-error, .password-error-text, .city-error, .select-error, .radio-error, .shipping-street-error, .shipping-city-error, .shipping-postal-error, .shipping-select-error",
    );
    for (let i = 0; i < errors.length; i += 1) {
      if (errors[i].textContent) {
        isAnyFormError = true;
        break;
      }
    }

    [".shipping-street", ".shipping-city", ".shipping-postal-code", ".shipping-country"].forEach((selector) => {
      const element = document.querySelector(selector) as HTMLInputElement;
      element?.dispatchEvent(new Event("blur"));
    });

    const shippingErrors = document.querySelectorAll(
      ".shipping-street-error, .shipping-city-error, .shipping-postal-error, .shipping-select-error",
    );

    for (let j = 0; j < shippingErrors.length; j += 1) {
      if (shippingErrors[j].textContent) {
        isAnyFormError = true;
        break;
      }
    }

    if (isAnyFormError) return;

    await createCustomerProfile();
  });
};

export default validateRegistrationForm;
