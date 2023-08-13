import faceImg from "../assets/images/face.webp";
import bodyImg from "../assets/images/body.webp";
import hairImg from "../assets/images/hair.webp";
import brandsImg from "../assets/images/brands.webp";
import box1Img from "../assets/images/box1.jpg";
import box2Img from "../assets/images/box2.jpg";
import box3Img from "../assets/images/box3.jpg";
import box4Img from "../assets/images/box4.jpg";

const setMain = ():void => {
  const main = document.querySelector("main") as HTMLElement;
  console.log(main);
  const code = `
    <section class="welcom">
   <div class="welcom-back"></div>
   <div class="welcom-conteiner">
   <div class="welcom-content"> 
   <h1>This shop provides a lot of healthy and cozy products for you body.</h1>
   <p class="welcom-content-p">Our products are a modern way to save youth.</p>
   <div class="welcom-content-button">
   <a href="#">Catalog</a>
   </div>
   </div>
   </div>
    </section>
    <section class="catalog">
    <div class="catalog-container">
    <a class="catalog-face" href="#">
    <img src="${faceImg}" alt="Face" class="catalog-images">
    <p>Face</p>
    </a>
    <a class="catalog-body" href="#">
    <img src="${bodyImg}" alt="Body" class="catalog-images">
    <p>Body</p>
    </a>
    <a class="catalog-hair" href="#">
    <img src="${hairImg}" alt="Hair" class="catalog-images">
    <p>Hair</p>
    </a>
    <a class="catalog-brands" href="#">
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
    <a class="brands-box brands-box1"  href="#">
    <img class="welcome-back" src="${box1Img}">
    <div class="brand-box-shadow"></div>
    <p class="brands-box-name">SOME NAME</p>
    <p class="brands-box-choose">Choose products</p>
    </a>
    <a class="brands-box brands-box2" href="#">
    <img class="welcome-back" src="${box2Img}">
    <div class="brand-box-shadow"></div>
    <p class="brands-box-name">SOME NAME</p>
    <p class="brands-box-choose">Choose products</p>
    </a>
    <a class="brands-box brands-box3" href="#">
    <img class="welcome-back" src="${box3Img}">
    <div class="brand-box-shadow"></div>
    <p class="brands-box-name">SOME NAME</p>
    <p class="brands-box-choose">Choose products</p>
    </a>
    <a class="brands-box brands-box4" href="#">
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
  main.innerHTML = code;
};
export default setMain;
