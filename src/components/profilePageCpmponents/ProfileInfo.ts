import ProfileInfoField from "../common/ProfileInfoField";
import { IProfileInfo } from "../../interfaces/IProfile";

const ProfileInfo = (profileInfo: IProfileInfo): string => {
  const view = `
    ${ProfileInfoField("First Name", profileInfo.firstName)}
    ${ProfileInfoField("Last Name", profileInfo.lastName)}
    ${ProfileInfoField("Date Of Birth", profileInfo.birthDate)}
  `;

  return view;
};

export default ProfileInfo;
