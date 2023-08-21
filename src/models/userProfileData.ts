import { IUserProfileStoreData } from "../interfaces/IUserProfileData";

// init value .Prospective value has much more keys
let userProfileData: IUserProfileStoreData = {
  isAuth: false,
};

const getUserProfileData = (): IUserProfileStoreData => userProfileData;

const setUserProfileFullData = (actualUserProfileData: IUserProfileStoreData) => {
  userProfileData = actualUserProfileData;
};
export { getUserProfileData, setUserProfileFullData };
