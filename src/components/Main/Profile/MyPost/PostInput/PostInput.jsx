import React from 'react';
import { StyledPostButton, StyledTextArea } from '../../../../Styles';
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
      // <AddPostForm 
      //    onPostChange={onPostChange} 
      //    onAddPost={onAddPost}
      //    newPostElement={newPostElement}/>
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
            <StyledPostButton onClick={onAddPost} >Add post</StyledPostButton>
         </div>
      </div>
   )
}

export default PostInput;