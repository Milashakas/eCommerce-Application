// Components
import ProfileInfo from "../components/profilePageCpmponents/ProfileInfo";
import WelcomeSection from "../components/common/WelcomeSection";
import AddressesInfo from "../components/profilePageCpmponents/AddressesInfo";
// Utils
import getCurrentLocationPath from "../utils/getCurrentLocationPath";
// Interfaces
import { IProfileInfo, IAdressessInfo } from "../interfaces/IProfile";
import { IUserProfileStoreData, IUserBasicInfo, IAddressData } from "../interfaces/IUserProfileData";
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
    const addressesData = userData.addresses as IAddressData[];
    const defaultBilling = userData.defaultBillingAddress;
    const defaultShipping = userData.defaultShippingAddress;
    const adressesInfo: IAdressessInfo = {
      addresses: addressesData,
      defaultBilling,
      defaultShipping,
    };
    profileTabLayout = AddressesInfo(adressesInfo);
  }

  return profileTabLayout;
};

const Profile = () => {
  const { isAuth } = store.getState();

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
