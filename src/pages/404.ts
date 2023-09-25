const errorPage = () => {
  const code = `
    <section class="errorWindow">
    <div class="errorWindow-back"></div>
    <h2 class="errorWindow-h2">404</h2>
    <p class="errorWindow-p">PAGE NOT FOUND</p>
    <p class="errorWindow-p2">Something seems to have gone wrong! <br> Either the page you are requesting doesn't exist or there happened some failure!</p>
    <a class="errorWindow-button" href="/">Main Page</a>
    </section>
    `;
  return code;
};
export default errorPage;
