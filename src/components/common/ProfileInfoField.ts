const ProfileInfoField = (fieldTitle: string, fieldValue: string) => {
  const view = `
  <div class="profile-info-field">
    <p class="profile-field-title">${fieldTitle}</p>
    <p class="profile-field-value">${fieldValue}</p>
  </div>
  `;

  return view;
};

export default ProfileInfoField;
