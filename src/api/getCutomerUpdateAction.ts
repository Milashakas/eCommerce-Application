import { CustomerUpdateAction } from "@commercetools/platform-sdk";

const updateFirstNameAction = (newValue: string): CustomerUpdateAction => ({
  action: "setFirstName",
  firstName: newValue,
});

const updateLastNameAction = (newValue: string): CustomerUpdateAction => ({
  action: "setLastName",
  lastName: newValue,
});

const updateBirthDayAction = (newValue: string): CustomerUpdateAction => ({
  action: "setDateOfBirth",
  dateOfBirth: newValue,
});

const updateEmailAction = (newValue: string): CustomerUpdateAction => ({
  action: "changeEmail",
  email: newValue,
});

const getCutomerUpdateAction = (editModeId: string, newValue: string): CustomerUpdateAction => {
  let updateAction: CustomerUpdateAction = {} as CustomerUpdateAction;
  if (editModeId === "editName") updateAction = updateFirstNameAction(newValue);
  if (editModeId === "editLastName") updateAction = updateLastNameAction(newValue);
  if (editModeId === "editBirthDate") updateAction = updateBirthDayAction(newValue);
  if (editModeId === "editEmail") updateAction = updateEmailAction(newValue);

  return updateAction;
};

export default getCutomerUpdateAction;
