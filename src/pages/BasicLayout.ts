import getFooter from "../components/common/Footer";
import getHeader from "../components/common/Header";
import renderRegistrationForm from "./Registration";

function setBasicLayout(): void {
  const body = document.querySelector("body") as HTMLBodyElement;
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
