import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

   let contacts;
   props.profile
      ? (contacts = Object.entries(props.profile.data.contacts).map((value) => (
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
               <img
                  src={props.profile.data.photos.large}
                  className={s.logo}
                  alt="logo"
               />
               <div className={s.description}>
                  <h2>{props.profile.data.fullName}</h2>
                  <p>{props.profile.data.aboutMe}</p>
                  <ul>{contacts}</ul>
                  <p>{props.profile.data.lookingForAJobDescription}</p>
               </div>
            </div>
         </div>
      );
   }
};

export default ProfileInfo;
