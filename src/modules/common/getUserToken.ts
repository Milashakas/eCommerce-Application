const getUserToken = (): string | null => {
  const userToken: string | null = localStorage.getItem("userToken");

  return userToken;
};

export default getUserToken;
