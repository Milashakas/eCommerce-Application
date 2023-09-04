const EditBtn = (editTitle: string, id: string): string => {
  const view = `
    <button class="edit-profileData-btn id="${id}"">${editTitle}</button>
  `;

  return view;
};

const ProfileSettings = () => {
  const view = `
  <div class="profile-settings-tab">
    ${EditBtn("Change Name", "editName")}
    ${EditBtn("Change Last Name", "editLastName")}
    ${EditBtn("Change Date of birth", "editBirthDate")}
    ${EditBtn("Change Email", "editEmail")}
    ${EditBtn("Change Password", "editPassword")}
    ${EditBtn("Change Billing Address", "editBillingAddress")}
    ${EditBtn("Change Shipping Address", "editShippingAddress")}
  </div>
  `;

  return view;
};

export default ProfileSettings;
