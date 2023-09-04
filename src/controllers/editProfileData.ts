// Utils
import getCurrentLocationPath from "../utils/getCurrentLocationPath";
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
  const validatedInpput = document.querySelector(".form-input input") as HTMLInputElement;

  submitBtn.addEventListener("click", async () => {
    validatedInpput.dispatchEvent(new Event("blur"));

    if (validatedInpput.classList.contains("invalid")) return;
    const responseCode = await updateProfileData(editModeId, validatedInpput.value);

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
  const profilePath = getCurrentLocationPath();
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
