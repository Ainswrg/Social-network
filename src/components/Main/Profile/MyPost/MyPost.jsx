import s from './MyPost.module.css';
import Post from './Post/Post';
import Button from './PostInput/Button/Button';
import Input from './PostInput/Input/Input';

const MyPost = (props) => {

   let postElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);

   return (
      <div className={s.postsBlock}>

            <h3>My post</h3>

         <div className={s.inputBlock}>
            <Input />
            <Button />
         </div>
         {postElement}
      </div>
   )
}

export default MyPost;