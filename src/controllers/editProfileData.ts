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

// Components
import EditModeWindow from "../components/EditModeWindow";

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
    const modeWindow = getModeWindow() as HTMLDivElement;
    modeWindow.remove();
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
      runPageFunctional();
    });
  });
};

export default editProfileData;
