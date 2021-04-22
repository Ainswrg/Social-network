import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   return (
      <div className={s.content}>
         <ProfileInfo />
         <MyPost posts={props.profilePage.posts}
         newPostText = {props.profilePage.newPostText}
         dispatch={props.dispatch}/>
      </div>
   );
}

export default Profile;