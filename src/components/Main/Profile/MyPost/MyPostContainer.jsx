import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/profile-reducer';
import MyPost from './MyPost';


// const MyPostContainer = (props) => {
//    // let postsElement = state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

//    return <StoreContext.Consumer> 
//       { store => {
//          let state = store.getState();

//          let onAddPost = () => {
//             store.dispatch(addPostActionCreator());
//          }
//          let onPostChange = (newPost) => {
//             let action = updateNewPostTextActionCreator(newPost)
//             store.dispatch(action);
//          }

//          return <MyPost
//             posts={store.getState().profilePage.posts} 
//             updateNewPostText={onPostChange}
//             onAddPost={onAddPost}
//             dispatch={store.dispatch}
//             newPostText={state.profilePage.newPostText}/>
            
//       }}
      
//    </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      newPostText: () => {
         dispatch(addPostActionCreator());
      },
      updateNewPostText: (newPost) => {
         let action = updateNewPostTextActionCreator(newPost)
            dispatch(action);
      }
   }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;