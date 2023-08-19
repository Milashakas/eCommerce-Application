import faceImg from "../assets/images/face.webp";
import bodyImg from "../assets/images/body.webp";
import hairImg from "../assets/images/hair.webp";
import brandsImg from "../assets/images/brands.webp";
import box1Img from "../assets/images/box1.webp";
import box2Img from "../assets/images/box2.webp";
import box3Img from "../assets/images/box3.webp";
import box4Img from "../assets/images/box4.webp";

const mainPage = () => {
  const code = `
    <section class="welcom">
   <div class="welcom-back"></div>
   <div class="welcom-conteiner">
   <div class="welcom-content"> 
   <h1>“Skin care online store where you can find everything to stay healthy and young.”</h1>
   <p class="welcom-content-p">Be good to your skin. You’ll wear it every day for the rest of your life.</p>
   <div class="welcom-content-button">
   <a href="/catalog">Catalog</a>
   </div>
   </div>
   </div>
    </section>
    <section class="catalog">
    <div class="catalog-container">
    <a class="catalog-face" href="/face">
    <img src="${faceImg}" alt="Face" class="catalog-images">
    <p>Face</p>
    </a>
    <a class="catalog-body" href="/body">
    <img src="${bodyImg}" alt="Body" class="catalog-images">
    <p>Body</p>
    </a>
    <a class="catalog-hair" href="/hair">
    <img src="${hairImg}" alt="Hair" class="catalog-images">
    <p>Hair</p>
    </a>
    <a class="catalog-brands" href="/brands">
    <img src="${brandsImg}" alt="Brands" class="catalog-images">
    <p>Brands</p>
    </a>
    </div>
    </section>
    <section class="bestSellers">
    <div class="bestSellers-container"> 
    <h2>Best SELLERS</h2>
    <div class="bestProducts"></div>
    </div>
    </section>
    <section class="brands-section"> 
    <div class="brands-container">
    <a class="brands-box brands-box1"  href="/filter">
    <img class="welcome-back" src="${box1Img}">
    <div class="brand-box-shadow"></div>
    <p class="brands-box-name">SOME NAME</p>
    <p class="brands-box-choose">Choose products</p>
    </a>
    <a class="brands-box brands-box2" href="/filter">
    <img class="welcome-back" src="${box2Img}">
    <div class="brand-box-shadow"></div>
    <p class="brands-box-name">SOME NAME</p>
    <p class="brands-box-choose">Choose products</p>
    </a>
    <a class="brands-box brands-box3" href="/filter">
    <img class="welcome-back" src="${box3Img}">
    <div class="brand-box-shadow"></div>
    <p class="brands-box-name">SOME NAME</p>
    <p class="brands-box-choose">Choose products</p>
    </a>
    <a class="brands-box brands-box4" href="/filter">
    <img class="welcome-back" src="${box4Img}">
    <div class="brand-box-shadow"></div>
    <p class="brands-box-name">SOME NAME</p>
    <p class="brands-box-choose">Choose products</p>
    </a>
    </div>
    </section>
    <section class="sale">
    <div class="sale-container"> 
    <h2>Sale</h2>
    <div class="saleProducts"></div>
    </div>
    </section>
    `;
  return code;
};
export default mainPage;
