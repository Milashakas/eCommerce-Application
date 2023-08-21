const getUserToken = (): string | null => {
  const userToken: string | null = localStorage.getItem("userToken");

  return userToken;
};

const setUserToken = (token: string) => {
  localStorage.setItem("userToken", token);
};

const removeUserToken = () => {
  localStorage.removeItem("userToken");
};

export { getUserToken, setUserToken, removeUserToken };
