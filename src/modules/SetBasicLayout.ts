import getFooter from "../components/common/Footer";
import getHeader from "../components/common/Header";

const setBasicLayout = (data = "<div><p>Paragraph</p></div>") => {
  const code: string = `
  ${getHeader()}
  <main>
  ${data}
  </main>
  ${getFooter()}
`;
  const body = document.querySelector("body") as HTMLBodyElement;
  body.innerHTML = code;
};

export default setBasicLayout;
