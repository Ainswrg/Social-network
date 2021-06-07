import { connect } from 'react-redux';
import {  addPostActionCreator } from '../../../../Redux/profile-reducer';
import MyPost from './MyPost';

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
       addPost: (newPostText) => {
           dispatch(addPostActionCreator(newPostText));
       }
   }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;