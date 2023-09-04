import Profile from "../pages/Profile";

const rerenderProfilePage = () => {
  const currentPage = window.location.pathname.split("/")[1];
  const main = document.querySelector("main") as HTMLDivElement;
  if (currentPage === "profile") {
    main.innerHTML = Profile();
  }
};

export default rerenderProfilePage;
