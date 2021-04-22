import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../Redux/profile-reducer';

import s from './PostInput.module.css';


const PostInput = (props) => {
   let newPostElement = React.createRef();

   let onAddPost = () => {
      // props.addPost();
      props.dispatch(addPostActionCreator());
   }
   let onPostChange = () => {
      let newPost = newPostElement.current.value;
      // props.updateNewPostText();
      let action = updateNewPostTextActionCreator(newPost)
      props.dispatch(action);
   }

   return (
      <div className={s.inputBlock}>
         <div>
            <textarea onChange={onPostChange} 
            ref={newPostElement} 
            value={props.newPostText} 
            className={s.input} />
         </div>
         <div>
            <button onClick={onAddPost} className={s.button}>Add post</button>
         </div>
      </div>
   )
}

export default PostInput;