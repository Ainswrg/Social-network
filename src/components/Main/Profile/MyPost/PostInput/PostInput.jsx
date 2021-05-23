import React from 'react';
import { StyledTextArea } from '../../../../Styles';
import AddPostForm from './AddPostForm';
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
      // <AddPostForm />
      <div className={s.inputBlock}>
         <div>
            <StyledTextArea 
               onChange={onPostChange} 
               ref={newPostElement} 
               value={props.newPostText}
               placeholder={'Write Post'}
               className={s.input}
            >
            </StyledTextArea>
         </div>
         <div>
            <button onClick={onAddPost} className={s.button}>Add post</button>
         </div>
      </div>
   )
}

export default PostInput;