import WelcomeSection from "../components/common/WelcomeSection";

const ProfilePage = () => {
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

      <div class="profile-tab"></div>
    </div>
  `;

  return view;
};

export default ProfilePage;
