// import { ApiRoot } from "@commercetools/platform-sdk";
import "./assets/styles/normalize.scss";
import "./assets/styles/style.scss";
import "./assets/styles/styleHeadFoot.scss";
import "./assets/styles/styleMain.scss";
import setBasicLayout from "./pages/BasicLayout";
import initSameShippingListener from "./modules/setShippingAddressData";
import { insertRegistrationFormIntoMain } from "./pages/Registration";

setBasicLayout();
insertRegistrationFormIntoMain();
initSameShippingListener();
