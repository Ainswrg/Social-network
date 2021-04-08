import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

   return (
      <div className={s.content}>
         <ProfileInfo />
         <MyPost posts={props.profilePage.posts}
         newPostText = {props.profilePage.newPostText}
         updateNewPostText = {props.updateNewPostText}
         addPost={props.addPost}/>
      </div>
   );
}

export default Profile;