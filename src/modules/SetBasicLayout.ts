import getFooter from "../components/common/Footer";
import getHeader from "../components/common/Header";

const setBasicLayout = () => {
  const code: string = `
  ${getHeader()}
  <main>
  </main>
  ${getFooter()}
`;
  const body = document.querySelector("body") as HTMLBodyElement;
  body.innerHTML = code;
};

export default setBasicLayout;
