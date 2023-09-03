import nuxe from "../assets/images/companyLogos/nuxe.png";
import ordinary from "../assets/images/companyLogos/theOrdinary.png";
import clarins from "../assets/images/companyLogos/clarins.png";
import kiehls from "../assets/images/companyLogos/kiehls.png";
import store from "../redux/createStore";

const getDataPriceInputsValues = (): number[] => {
  const CENT_PER_EURO = 100;
  const inputsValueArr: number[] = [0, 500];

  const priceRange = store.getState().catalog.filterData?.priceRange;
  if (!priceRange || (!priceRange.high && !priceRange.low)) return inputsValueArr;

  inputsValueArr[0] = priceRange.low / CENT_PER_EURO;
  inputsValueArr[1] = priceRange.high / CENT_PER_EURO;

  return inputsValueArr;
};

const catalogPage = () => {
  const dataPriceInputsValues = getDataPriceInputsValues();

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
          <option value="base" data-sort="id asc">Base sorting</option>
          <option value="priceHight" data-sort="price asc">Price:high</option>
          <option value="priceLow" data-sort="id desc">Price:low</option>
          <option value="aToW" data-sort="name.en-US asc">A -> W</option>
          <option value="aToA" data-sort="name.en-US desc">W -> A</option>
        </select>
      </div>
      <div class="searchingBlock">
    <div class="searchForm">
    <input name="s" placeholder="Search" type="search">
    <button type="submit"></button>
  </div>
    </div>
      <div class="catalog-section-wrapper">
        <div class="catalog-section-filter">
          <div class="catalog-burger-close-button">
            <div class="catalog-burger-close-line"></div>
            <div class="catalog-burger-close-line"></div>
          </div>
          <div class="filter-price">
            <p class="filter-title">Price</p>
            <div class="filter-price-inputs">
              <input type="number" class="filter-price-input-min" value="${dataPriceInputsValues[0]}" />
              <input type="number" class="filter-price-input-max" value="${dataPriceInputsValues[1]}" />
            </div>
            <p class="filter-price-title">
              Price : <span class="filter-price-min">0</span> EUR - <span class="filter-price-max">500</span> EUR
            </p>
            <button class="filter-price-button">SET FILTER</button>
            <button class="reset-filter-price-button">RESET FILTER</button>
          </div>
          <div class="filter-brands">
            <p class="filter-title">Brands</p>
            <div class="filter-list-wripper">
              <ul class="filter-brands-list">
                <li>
                  <a href="/catalog/brand-nuxe"><img src="${nuxe}" id ="nuxe"></a>
                </li>
                <li>
                  <a href="/catalog/brand-ordinary"><img src="${ordinary}" id ="ordinary"></a>
                </li>
                <li>
                  <a href="/catalog/brand-clarins"><img src="${clarins}" id ="clarins"></a>
                </li>
                <li>
                <a href="/catalog/brand-kiehls"><img src="${kiehls}" id ="kiehls"></a>
              </li>
              </ul>
            </div>
          </div>
          <div class="filter-catalog-links">
            <p class="filter-title">Categories</p>
            <ul class="catalog-links-list">
              <li><a href="/catalog/category-face">Face</a></li>
              <li><a href="/catalog/category-body">Body</a></li>
              <li><a href="/catalog/category-hair">Hair</a></li>
              <li><a href="/catalog/category-sale">SALE</a></li>
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
