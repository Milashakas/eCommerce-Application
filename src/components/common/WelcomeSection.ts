const WelcomeSection = (heading: string) => {
  const view = `
    <section class="section-page-welcome">
      <div class="section-page-welcome-back"></div>
      <h2 class="section-page-welcome-h2">${heading}</h2>
    </section>
  `;

  return view;
};

export default WelcomeSection;
