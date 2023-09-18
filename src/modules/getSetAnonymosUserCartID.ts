const getAnonymosUserCartID = () => localStorage.getItem("anonymousUserCartID");

const setAnonymosUserCartID = (cartID: string) => {
  localStorage.setItem("anonymousUserCartID", cartID);
};

const removeAnonymosUserCartID = () => {
  localStorage.removeItem("anonymousUserCartID");
};

export { getAnonymosUserCartID, setAnonymosUserCartID, removeAnonymosUserCartID };
