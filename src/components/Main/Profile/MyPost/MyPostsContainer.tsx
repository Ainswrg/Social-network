import { connect } from "react-redux";
import { profileActions } from "../../../../Redux/profile-reducer";
import { AppStateType } from "../../../../Redux/redux-store";
import MyPostsMemorized from "./MyPosts";

let mapStateToProps = (state: AppStateType) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
   };
};
const mapDispatchToProps = (dispatch: any) => {
   return {
      addPost: (newPostText: string) => {
         dispatch(profileActions.addPostActionCreator(newPostText));
      },
   };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsMemorized);
export default MyPostsContainer;
