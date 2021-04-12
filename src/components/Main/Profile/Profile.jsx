import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

   return (
      <div className={s.content}>
         <ProfileInfo />
         <MyPost posts={props.state.posts}/>
      </div>
   );
}

export default Profile;