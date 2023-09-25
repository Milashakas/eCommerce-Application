// Utils
import { getCurrentLocationSecondPath } from "../utils/getCurrentLocationPath";
// Modules
import { runPageFunctional } from "../router";
import { validateFirstName, validateLastName } from "../modules/validateNames";
import validateDOB from "../modules/validateBirthDate";
import validateEmail from "../modules/validateEmail";
import validatePassword from "../modules/validatePassword";
import validateBillingAddress from "../modules/validateBillingAddress";
import { validateShippingAddress } from "../modules/validateShippingAddress";
import showPopupNotification from "../modules/showPopupNotification";
// Components
import EditModeWindow from "../components/EditModeWindow";
// api
import updateProfileData from "../api/updateProfileData";
import changeProfilePassword from "../api/changeProfilePassword";
// Async Actions
import autoLogInAsyncAction from "../redux/asyncActions/autoLogInAsyncAction";

const setNecessaryValidation = (editModeId: string) => {
  if (editModeId === "editName") validateFirstName();
  if (editModeId === "editLastName") validateLastName();
  if (editModeId === "editBirthDate") validateDOB();
  if (editModeId === "editEmail") validateEmail();
  if (editModeId === "editPassword") validatePassword();
  if (editModeId === "editBillingAddress") validateBillingAddress();
  if (editModeId === "editShippingAddress") validateShippingAddress();
};

const getModeWindow = () => document.querySelector(".edit-mode-window");

const closeModeWindow = () => {
  const closeBtn = document.querySelector(".edit-mode-cancelBtn") as HTMLButtonElement;

  closeBtn.addEventListener("click", () => {
    const modeWindow = getModeWindow();
    modeWindow?.remove();
  });
};

const removeEditModeWindow = () => {
  const editModeWindow = document.querySelector(".edit-mode-window");
  editModeWindow?.remove();
};

const submitNewData = (editModeId: string) => {
  const submitBtn = document.querySelector(".edit-mode-sumbitBtn") as HTMLButtonElement;
  const validatedInpput = document.querySelectorAll(".form-input input")[0] as HTMLInputElement; // current password as well in case of changing password

  submitBtn.addEventListener("click", async () => {
    validatedInpput.dispatchEvent(new Event("blur"));

    if (validatedInpput.classList.contains("invalid")) return;
    let responseCode: number = NaN;

    // Дикий костыль в случая смены пароля. Писал за 2 часа до дедлайна на характере
    if (editModeId === "editPassword") {
      const newPasswordInput = document.querySelector("#newPassword") as HTMLInputElement;
      if (newPasswordInput.classList.contains("invalid")) return;

      responseCode = await changeProfilePassword(validatedInpput.value, newPasswordInput.value);
    } else responseCode = await updateProfileData(editModeId, validatedInpput.value);

    if (responseCode === 200) {
      await autoLogInAsyncAction();
      showPopupNotification({ classMode: "notification-success", message: "You data was changed successfully!" });
      removeEditModeWindow();
    } else {
      showPopupNotification({ classMode: "notification-error", message: "Your attempt to change data failed" });
      removeEditModeWindow();
    }
  });
};

const editProfileData = () => {
  const profilePath = getCurrentLocationSecondPath();
  if (profilePath !== "settings") return;

  const editBtns = document.querySelectorAll(".edit-profileData-btn");

  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
      const main = document.querySelector("main") as HTMLDivElement;
      const editModeId: string = editBtn.id;

      const prospectiveModeWindow = getModeWindow();
      if (prospectiveModeWindow) return;

      main.innerHTML += EditModeWindow(editBtn.id);

      setNecessaryValidation(editModeId);
      closeModeWindow();
      submitNewData(editModeId);
      runPageFunctional();
    });
  });
};

export default editProfileData;
