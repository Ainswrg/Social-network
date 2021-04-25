import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/profile-reducer';
import StoreContext from '../../../../StoreContext';
import MyPost from './MyPost';


const MyPostContainer = (props) => {
   // let postsElement = state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

   return <StoreContext.Consumer> 
      { store => {
         let state = store.getState();

         let onAddPost = () => {
            store.dispatch(addPostActionCreator());
         }
         let onPostChange = (newPost) => {
            let action = updateNewPostTextActionCreator(newPost)
            store.dispatch(action);
         }

         return <MyPost
            posts={store.getState().profilePage.posts} 
            updateNewPostText={onPostChange}
            onAddPost={onAddPost}
            dispatch={store.dispatch}
            newPostText={state.profilePage.newPostText}/>
            
      }}
      
   </StoreContext.Consumer>
}

export default MyPostContainer;