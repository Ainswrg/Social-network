import React from 'react';
import s from './PostInput.module.css';


const PostInput = (props) => {
   let newPostElement = React.createRef();

   let onAddPost = () => {
      props.addPost();
   }
   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   return (
         <div className={s.inputBlock}>
            <div>
               <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={s.input} />
            </div>
            <div>
               <button onClick={onAddPost} className={s.button}>Add post</button>
            </div>
         </div>
   )
}

export default PostInput;