import getFooter from "../components/common/Footer";
import getHeader from "../components/common/Header";

const setBasicLayout = (data = "<div><p>Paragraph</p></div>") => {
  const code:string = `
  ${getHeader()}
  <main>
  ${data}
  </main>
  ${getFooter()}
`;
  return code;
};

export default setBasicLayout;
