import React from "react";
import { ProfileType } from "../../../types/Types";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
  profile: ProfileType | null;
  status: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

const Profile: React.FC<PropsType> = (props) => {
  return (
    <>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
