import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import avatar from '../../../../assets/img/avatar.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
   let contacts;
   props.profile
      ? (contacts = Object.entries(props.profile.contacts).map((value) => (
            <li key={value}>
               {value[0]} : {value[1]}
            </li>
         )))
      : (contacts = "");
   if (!props.profile) {
      return <Preloader />;
   } else {
      return (
         <div className={s.content}>
            <div className={s.jumbotron}></div>
            <div className={s.content__info}>
               <div>
               <img
                  src={props.profile.photos.large ? props.profile.photos.large : avatar}
                  className={s.logo}
                  alt="logo"
               />
               <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
               </div>
               <div className={s.description}>
                  <h2>{props.profile.fullName}</h2>
                  <p>{props.profile.aboutMe}</p>
                  <ul>{contacts}</ul>
                  <p>{props.profile.lookingForAJobDescription}</p>
               </div>
            </div>
         </div>
      );
   }
};

export default ProfileInfo;
