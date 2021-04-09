import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
   return (
      <div className={s.content}>
         <div className={s.jumbotron}></div>
         <div className={s.content__info}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" className={s.logo} alt="logo" />
            <div className={s.description}>
               <h2>Jaslan D</h2>
               <p>Date of Birth: 21 September</p>
               <p>City: Orenburg</p>
               <p>Education: APK</p>
            </div>
         </div>
      </div>
   )
}

export default ProfileInfo;