const getAnonymosUserCartID = () => localStorage.getItem("anonymousUserCartID");

const setAnonymosUserCartID = (cartID: string) => {
  localStorage.setItem("anonymousUserCartID", cartID);
};

export { getAnonymosUserCartID, setAnonymosUserCartID };
