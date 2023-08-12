import getFooter from "../components/common/Footer";
import getHeader from "../components/common/Header";
import { renderRegistrationForm } from "./Registration";

const body = document.querySelector("body") as HTMLBodyElement;

function setBasicLayout(): void {
  const code: string = `
  ${getHeader()}
  <main>
    ${renderRegistrationForm()}
  </main>
  ${getFooter()}
`;
  body.innerHTML = code;
}

export default setBasicLayout;
