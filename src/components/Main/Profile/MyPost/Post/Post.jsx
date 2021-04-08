import s from './Post.module.css';

const Post = (props) => {
   return (
      <div className={s.posts}>
         <div className={s.item}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" className={s.logo} alt="logo" />
            {props.message} 
            <div>
               <span>Like {props.likesCount}</span>
            </div>
         </div>
      </div >
   )
}

export default Post;