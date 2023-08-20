import logo from "../../assets/logo/logowhite.svg";
import iconBasket from "../../assets/icons/backet.svg";
import iconProfile from "../../assets/icons/profile.svg";

const getHeader = () => {
  const code:string = `
  <div class="overlay none"></div>
<header class="header">
    <div class="header-container">
      <div class="burger">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
      </div>
      <img src=${logo} class="header-logo" alt="logo">
      <nav class="header-nav">
        <ul class="header-list">
          <li><a href="/">MAIN</a></li>
          <li><a href="/catalog">CATALOG</a>
          </li>
          <li><a href="/brands">BRANDS</a>
          </li>
          <li><a href="/face">FACE</a>
          </li>
          <li><a href="/body">BODY</a>
          </li>
          <li><a href="/hair">HAIR</a>
          </li>
          <li><a href="/sale">SALE</a></li>
          <li><a href="/aboutus">ABOUT US</a></li>
        </ul>
        <div class="header-profile">
          <div class="header-buttons">
            <a class="logInButton header-button" href="/login">Log In</a>
            <a class="signUpButton header-button" href="/signup">Sign Up</a>
          </div>
        </div>
      </nav>
      <div class="header-icons">
      <div class="profile hideElement"><a href="/profile"><img src=${iconProfile} width="30px"
      height="30px" title="Profile" alt="profile" class="icon"></a>
      </div>
      <div class="basket">
        <a href="/basket" class="basket">
          <img src=${iconBasket} width="30px" height="30px" title="Basket" alt="basket"
            class="icon">
        </a>
        <span class="basket-count">0</span>
      </div>
      </div>
    </div>
  </header>
  `;
  return code;
};
export default getHeader;
