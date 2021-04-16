import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import PostInput from './PostInput/PostInput';

const MyPost = (props) => {
   let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
   return (
      <div className={s.postsBlock}>
         <h3>My post</h3>
         <PostInput
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} 
            newPostText = {props.newPostText}/>
         {postsElement}
      </div>
   )
}

export default MyPost;