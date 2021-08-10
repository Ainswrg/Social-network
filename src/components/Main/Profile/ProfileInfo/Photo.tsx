import avatar from "../../../../assets/img/avatar.png";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import { AvatarContent, AvatarEdit, AvatarImg, AvatarPreview } from "../Styles";
import { ProfileType } from "../../../../types/Types";
import { ChangeEvent } from "react";

type PropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile?: (profile: ProfileType) => Promise<any>;
};

const Photo: React.FC<PropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}) => {
  const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <AvatarContent>
      <AvatarPreview>
        <AvatarImg profile={profile} avatar={avatar} alt={"avatar"} />
      </AvatarPreview>
      <AvatarEdit>
        {isOwner && (
          <input
            type={"file"}
            onChange={mainPhotoSelected}
            id={"imageUpload"}
            accept={".png, .jpg, .jpeg"}
          />
        )}
        <label htmlFor={"imageUpload"}></label>
      </AvatarEdit>

      <h5>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </h5>
    </AvatarContent>
  );
};

export default Photo;
