// Components
import ProfileInfo from "../components/profilePageCpmponents/ProfileInfo";
import WelcomeSection from "../components/common/WelcomeSection";
// Utils
import getCurrentLocationPath from "../utils/getCurrentLocationPath";
// Interfaces
import { IProfileInfo } from "../interfaces/IProfile";
import { IUserProfileStoreData, IUserBasicInfo } from "../interfaces/IUserProfileData";
// store
import store from "../redux/createStore";

const getProfileTab = (userData: IUserProfileStoreData) => {
  const currentPath = getCurrentLocationPath();
  let profileTabLayout = "";

  if (currentPath === "info" || !currentPath) {
    const basicInfo = userData.userBasicInfo as IUserBasicInfo;
    const profileInfo: IProfileInfo = {
      firstName: basicInfo.firstName,
      lastName: basicInfo.lastName,
      birthDate: basicInfo.dateOfBirth,
    };

    profileTabLayout = ProfileInfo(profileInfo);
  }
  if (currentPath === "addresses") {
    profileTabLayout = "f";
  }

  return profileTabLayout;
};

const Profile = () => {
  const { isAuth } = store.getState();
  console.log(isAuth);
  if (!isAuth) return "<h1>Loading Page</h1>";

  const userData = store.getState().userData as IUserProfileStoreData;

  const view = `
    ${WelcomeSection("My Profile")}

    <div class="profile-window">
      <nav class="profile-nav">
        <a href="/profile/info" class="profile-nav-link">Personal Info</a>
        <a href="/profile/addresses" class="profile-nav-link">My Addresses</a>
        <a href="/profile/settings" class="profile-nav-link">Settings</a>
        <a href="/basket" class="profile-nav-link">Basket</a>
        <span id="profile-exit" class="profile-nav-link">Exit</span>
      </nav>

      <div class="profile-tab">
        ${getProfileTab(userData)}
      </div>
    </div>
  `;

  return view;
};

export default Profile;
