import { useSelector } from 'react-redux';
import s from './Post.module.css';
import avatar from '../../../../../assets/img/avatar.png'

const Post = (props) => {
   const profile = useSelector(state => state.profilePage.profile)
   return (
      // <div className={s.posts}>
         <div className={s.item}>
            <div className={s.img}>
               <img src={profile ? profile.photos.large : avatar} className={s.logo} alt="logo" />
            </div>
            
            <div className={s.msg}>
               {props.message} 
            </div>
            
            <div className={s.like}>
               <span>Like {props.likesCount}</span>
            </div>
         </div>
      // </div >
   )
}

export default Post;