import { connect } from "react-redux";
import { profileActions } from "../../../../Redux/profile-reducer";
import { AppStateType } from "../../../../Redux/redux-store";
import MyPostsMemorized, { DispatchIProps, MapIProps } from "./MyPosts";

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect<MapIProps, DispatchIProps, {}, AppStateType>(
  mapStateToProps,
  {
    addPost: profileActions.addPostActionCreator,
  }
)(MyPostsMemorized);
export default MyPostsContainer;
