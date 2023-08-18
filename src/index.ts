import "./assets/styles/normalize.scss";
import "./assets/styles/style.scss";
import "./assets/styles/styleHeadFoot.scss";
import "./assets/styles/styleMain.scss";
import setBasicLayout from "./modules/SetBasicLayout";
// import mainPage from "./pages/Main";
import headerOpenMenuFunctional from "./modules/headerEvents";
import footerOpenLinksFunctional from "./modules/footerEvents";

setBasicLayout();
headerOpenMenuFunctional();
footerOpenLinksFunctional();
