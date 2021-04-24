import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import PostInputContainer from './PostInput/PostInputContainer';

const MyPost = (props) => {
   let state = props.store.getState();
   let postsElement = state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
   return (
      <div className={s.postsBlock}>
         <h3>My post</h3>
         <PostInputContainer
            // dispatch={props.dispatch} 
            // newPostText = {props.newPostText}
            store={props.store}/>
         {postsElement}
      </div>
   )
}

export default MyPost;