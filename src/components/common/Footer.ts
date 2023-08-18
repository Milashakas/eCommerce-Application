import logoBlack from "../../assets/logo/logoblack.svg";

const getFooter = () => {
  const code:string = `
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
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
      </div>
    </footer>
    `;
  return code;
};
export default getFooter;
