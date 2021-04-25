import MyPostContainer from './MyPost/MyPostContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   return (
      <div className={s.content}>
         <ProfileInfo />
         <MyPostContainer />
      </div>
   );
}

export default Profile;