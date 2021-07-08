import avatar from '../../../../assets/img/avatar.png';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import { AvatarContent, AvatarEdit, AvatarImg, AvatarPreview } from '../../../Styles';

const Photo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

   const mainPhotoSelected = (e) => {
      if(e.target.files.length) {
         savePhoto( e.target.files[0]);
      }
   } 

return (
   <AvatarContent>
      <AvatarPreview>
         <AvatarImg 
            profile={profile}
            avatar={avatar}
         />
      </AvatarPreview>
      <AvatarEdit>
         {isOwner && <input type={"file"} onChange={mainPhotoSelected} id={"imageUpload"} accept={".png, .jpg, .jpeg"}/>}
         <label htmlFor={"imageUpload"}></label>
      </AvatarEdit>

      <h5>
         <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </h5>
                  
   </AvatarContent>
)
}

export default Photo;