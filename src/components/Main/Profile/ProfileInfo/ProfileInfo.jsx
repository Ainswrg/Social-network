import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import Photo from "./Photo";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
   let contacts;
   profile
      && (contacts = Object.entries(profile.contacts).map((value) => (
            <li key={value}>
               {value[0]} : {value[1]}
            </li>
         )));
   

   if (!profile) {
      return <Preloader />;
   } else {
      return (
         <div className={s.content}>
            <div className={s.jumbotron}></div>
            <div className={s.content__info}>
               <Photo
                  profile={profile}
                  status={status}
                  updateStatus={updateStatus}
                  isOwner={isOwner}
                  savePhoto={savePhoto}
               />
               <div className={s.description}>
                  <h2>{profile.fullName}</h2>
                  <p>{profile.aboutMe}</p>
                  <ul>{contacts}</ul>
                  <p>{profile.lookingForAJobDescription}</p>
               </div>
            </div>
         </div>
      );
   }
};

export default ProfileInfo;
