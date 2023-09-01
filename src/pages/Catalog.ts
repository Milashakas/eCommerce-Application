import nuxe from "../assets/images/companyLogos/nuxe.png";
import ordinary from "../assets/images/companyLogos/theOrdinary.png";

const catalogPage = () => {
  const code = `
    <section class="catalog-section-page-welcome">
    <div class="catalog-section-page-welcome-back"></div>
    <h2 class="catalog-section-page-welcome-h2">Catalog</h2>
    </section>
    <section class="catalog-section">
    <div class="catalog-section-header">
    <div class="catalog-header-wripper">
    <div class="catalog-section-header-burger">
    <div class="catalog-burger-line"></div>
    <div class="catalog-burger-line"></div>
    <div class="catalog-burger-line"></div>
    </div>
    <p>Filter</p>
    </div>
    <select name="orderBy" class="orderBy">
    <option value="base" selected="selected">Base sorting</option>
<option value="priceHight">Price:high</option>
<option value="priceLow">Price:low</option>
<option value="aToW">A -> W</option>
<option value="aToA">W -> A</option>
    </select>
    </div>
    <div class="catalog-section-wrapper">
<div Class="catalog-section-filter">
<div class="catalog-burger-close-button">
<div class="catalog-burger-close-line"></div>
<div class="catalog-burger-close-line"></div>
</div>
<div class="filter-price">
<p class="filter-title">Price</p>
<div class="filter-price-inputs">
<input type="number" class="filter-price-input-min" value="0">
<input type="number" class="filter-price-input-max" value="500">
</div>
<p class="filter-price-title">Price : <span class="filter-price-min">0</span> EUR - <span class="filter-price-max">500</span> EUR</p>
<button class="filter-price-button">SET FILTER</button>
</div>
<div class="filter-brands">
<p class="filter-title">Brands</p>
<div class="filter-list-wripper">
<ul class="filter-brands-list">
<li><a href="#"><img src="${nuxe}"></a></li>
<li><a href="#"><img src="${ordinary}"></a></li>
<li><a><img></a></li>
<li>4</li>
<li>5</li>
<li>6</li>
<li>4</li>
<li>5</li>
<li>6</li> 
</ul>
</div>
</div>
<div class="filter-catalog-links">
<p class="filter-title">Catalog</p>
<ul class="catalog-links-list">
<li><a href="#">Face</a></li>
<li><a href="#">Body</a></li>
<li><a href="#">Hair</a></li>
<li><a href="#">Discount</a></li>
</ul>
</div>
</div>
<div class="catalog-section-products"></div>
</div>
    </section>
    `;
  return code;
};
export default catalogPage;
