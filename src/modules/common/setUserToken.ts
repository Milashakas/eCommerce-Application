const setUserToken = (token: string) => {
  localStorage.setItem("userToken", token);
};

export default setUserToken;
