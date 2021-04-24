import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../Redux/profile-reducer';
import PostInput from './PostInput';


const PostInputContainer = (props) => {

   let onAddPost = () => {
      props.store.dispatch(addPostActionCreator());
   }

   let onPostChange = (newPost) => {
      let action = updateNewPostTextActionCreator(newPost)
      props.store.dispatch(action);
   }

   return (
      <PostInput updateNewPostText={onPostChange} 
      onAddPost={onAddPost} 
      dispatch={props.store.dispatch} 
      newPostText = {props.store.getState().profilePage.newPostText}/>
   )
}

export default PostInputContainer;