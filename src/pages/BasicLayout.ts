import getFooter from "../components/common/Footer";
import getHeader from "../components/common/Header";

const body = document.querySelector("body") as HTMLBodyElement;

function setBasicLayout():void {
  const code:string = `
  ${getHeader()}
  <main>
  </main>
  ${getFooter()}
`;
  body.innerHTML = code;
}

export default setBasicLayout;
