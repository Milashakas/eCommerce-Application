import logo from "../assets/logo/logowhite.svg";
import iconBasket from "../assets/icons/handbag_qmi32aaisiss.svg";
import iconProfile from "../assets/icons/profile_jjyeuy5kuk27 (1).svg";
import logoBlack from "../assets/logo/logoblack.svg";

const body = document.querySelector("body") as HTMLBodyElement;

const setHeaderAndFooter = ():void => {
  const code:string = `
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
          <li><a href="#">MAIN</a></li>
          <li><a href="#">CATALOG</a>
            <div>&#62;</div>
          </li>
          <li><a href="#">BRANDS</a>
            <div>&#62;</div>
          </li>
          <li><a href="#">FACE</a>
            <div>&#62;</div>
          </li>
          <li><a href="#">BODY</a>
            <div>&#62;</div>
          </li>
          <li><a href="#">HAIR</a>
            <div>&#62;</div>
          </li>
          <li><a href="#">SALE</a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul>
        <div class="header-profile">
          <div class="header-buttons">
            <div class="logInButton header-button">Log In</div>
            <div class="signUpButton header-button">Sign Up</div>
            <div class="profile"><a href="#"><img src=${iconProfile} width="30px"
                  height="30px" title="Profile" alt="profile" class="icon"></a></div>
          </div>
        </div>
      </nav>
      <div class="basket">
        <a href="#">
          <img src=${iconBasket} width="30px" height="30px" title="Basket" alt="basket"
            class="icon">
        </a>
        <span class="basket-count">0</span>
      </div>
    </div>
  </header>
  <main>
  </main>
  <footer class="footer">
  <div class="footer-container">
      <div class="footer-description">
        <div class="footer-logo"><img src=${logoBlack}></div>
        <p class="footer-description-p">
          This shop provides a lot of healthy and cozy products for you body.
        </p>
        <p class="footer-description-p">
          Our products are a modern way to save youth.
        </p>
      </div>
      <div class="footer-navigation">
        <p class="footer-title foot-title-nav">Shop</p>
        <nav class="footer-nav">
          <ul class="footer-list">
            <li><a href="#">Catalog</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Face</a></li>
            <li><a href="#">Body</a></li>
            <li><a href="#">Hair</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-info">
        <p class="footer-title foot-title-info">Information</p>
        <ul class="footer-info-list">
          <li><a href="#">How to create order</a></li>
          <li><a href="#">Payment</a></li>
          <li><a href="#">Delivery</a></li>
          <li><a href="#">Return</a></li>
          <li><a href="#">Contract offer</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer-aboutus">
        <p class="footer-title foot-title-aboutus">About us</p>
        <ul class="footer-aboutus-list">
          <li><a href="#">About shop</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
    </div>
  </footer>
`;
  body.innerHTML = code;
};
export default setHeaderAndFooter;
