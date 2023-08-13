const togglePasswordVisibility = () => {
  const btnShowPass = document.querySelector(".btn-show-pass");
  const icon = btnShowPass?.querySelector("i");
  const passwordInput = document.querySelector("input[type='password']");

  btnShowPass?.addEventListener("click", () => {
    if (icon?.classList.contains("fa-eye-slash")) {
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
      passwordInput?.setAttribute("type", "text");
    } else {
      icon?.classList.remove("fa-eye");
      icon?.classList.add("fa-eye-slash");
      passwordInput?.setAttribute("type", "password");
    }
  });
};

export default togglePasswordVisibility;
