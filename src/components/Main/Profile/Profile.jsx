import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   return (
      <div className={s.content}>
         <ProfileInfo />
         <MyPost 
         store={props.store}/>
      </div>
   );
}

export default Profile;