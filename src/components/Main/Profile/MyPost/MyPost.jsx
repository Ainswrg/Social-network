import React from 'react';
import Post from './Post/Post';
import PostForm from './PostInput/PostMe';

const MyPost = (props) => {
   let postsElement = [...props.posts].reverse().map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

   const handleSubmit = (values, { setSubmitting }) => {
      props.addPost(values.newPost);
      values.newPost = "";
      setSubmitting(false);
   }

   const initialValues = {
      newPost: '',
   }
   
   return (
      <>
         <PostForm
         handleSubmit={handleSubmit}
         addPost={props.addPost}
         initialValues={initialValues}/>
         {postsElement}
      </>
   )
}

export default MyPost;