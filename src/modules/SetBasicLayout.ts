import getFooter from "../components/common/Footer";
import getHeader from "../components/common/Header";

const setBasicLayout = () => {
  const body = document.querySelector("body") as HTMLBodyElement;
  const code:string = `
  ${getHeader()}
  <main>
  </main>
  ${getFooter()}
`;
  body.innerHTML = code;
};

export default setBasicLayout;
