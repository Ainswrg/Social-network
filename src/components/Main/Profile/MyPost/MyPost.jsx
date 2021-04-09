import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
   return (
      <div className={s.content}>
         <div>
            My post
         </div>
         <div className={s.input}>
            <textarea></textarea>
            <div>
               <button className={s.button}>Add post</button>
            </div>
         </div>
         <Post message="Hi" likeCount="25"/>
         <Post message="How are you?" likeCount="2"/>
      </div>
   )
}

export default MyPost;