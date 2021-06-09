import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import avatar from '../../../../assets/img/avatar.png'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
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
               <div>
               <img
                  src={profile.photos.large ? profile.photos.large : avatar}
                  className={s.logo}
                  alt="logo"
               />
               <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
               </div>
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
