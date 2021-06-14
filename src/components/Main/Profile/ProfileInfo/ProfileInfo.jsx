import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import Photo from "./Photo";
import { ProfileContent, ProfileDescription } from "../../../Styles";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
   let contacts;
   profile
      && (contacts = Object.entries(profile.contacts).map((value) => (
            <li key={value}>
               {value[0]} : {value[1] || "none"} 
            </li>
         )));
   

   if (!profile) {
      return <Preloader />;
   } else {
      return (
         <>
            <div className={s.jumbotron}></div>
            <ProfileContent>
               <Photo
                  profile={profile}
                  status={status}
                  updateStatus={updateStatus}
                  isOwner={isOwner}
                  savePhoto={savePhoto}
               />
               
               <ProfileDescription>
                  <h2>{profile.fullName}</h2>
                  <p>{profile.aboutMe}</p>
                  <ul>{contacts}</ul>
                  <p>{profile.lookingForAJobDescription }</p>
               </ProfileDescription>
            </ProfileContent>
         </>
      );
   }
};

export default ProfileInfo;
