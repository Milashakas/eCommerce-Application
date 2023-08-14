import "./assets/styles/normalize.scss";
import "./assets/styles/style.scss";
import "./assets/styles/styleHeadFoot.scss";
import "./assets/styles/styleMain.scss";
import setBasicLayout from "./modules/BasicLayout";
import mainPage from "./pages/Main";
import headerEvents from "./components/headerEvents";
import footerEvents from "./components/footerEvents";

setBasicLayout();
mainPage();
headerEvents();
footerEvents();
