import React from 'react';
import s from './PostInput.module.css';


const PostInput = (props) => {
   let newPostElement = React.createRef();

   let onAddPost = () => {
      props.onAddPost();
   }

   let onPostChange = () => {
      let newPost = newPostElement.current.value;
      props.updateNewPostText(newPost);
   }

   return (
      <div className={s.inputBlock}>
         <div>
            <textarea onChange={onPostChange} 
            ref={newPostElement} 
            value={props.newPostText}
            placeholder={'Write Post'}
            className={s.input} />
         </div>
         <div>
            <button onClick={onAddPost} className={s.button}>Add post</button>
         </div>
      </div>
   )
}

export default PostInput;