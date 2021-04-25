// import React from 'react';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../Redux/profile-reducer';
// import StoreContext from '../../../../../StoreContext';
// import PostInput from './PostInput';


// const PostInputContainer = (props) => {



//    return <StoreContext.Consumer>
//       {store => {
//          let state = store.getState();
//          let onAddPost = () => {
//             store.dispatch(addPostActionCreator());
//          }
//          let onPostChange = (newPost) => {
//             let action = updateNewPostTextActionCreator(newPost)
//             store.dispatch(action);
//          }

//          return <PostInput updateNewPostText={onPostChange}
//             onAddPost={onAddPost}
//             dispatch={store.dispatch}
//             newPostText={state.profilePage.newPostText} />
//       }

//       }
//    </StoreContext.Consumer>
// }

