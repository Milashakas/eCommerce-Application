import {
  FormNameInput,
  formLastNameInput,
  FormBirthDayInput,
  FormEmailInput,
  FormPasswordInput,
} from "./common/FormInputs";

const EDIT_MODE_DATA = {
  editName: FormNameInput(),
  editLastName: formLastNameInput(),
  editBirthDate: FormBirthDayInput(),
  editEmail: FormEmailInput(),
  editPassword: FormPasswordInput(),
};

const EditModeWindow = (editModeId: string) => {
  const key = editModeId as keyof object;
  const inputView = EDIT_MODE_DATA[key];

  const view = `
    <div class="edit-mode-window">
      ${inputView}
      <div class="edit-mode-options">
        <button class="edit-mode-sumbitBtn">Submit</button>
        <button class="edit-mode-cancelBtn">Cancel</button>
      </div>
    </div>
  `;

  return view;
};

export default EditModeWindow;
