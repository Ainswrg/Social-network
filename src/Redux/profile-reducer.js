const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

   switch(action.type) {
      case ADD_POST: 
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         }
         state.newPostText = '';
         state.posts.push(newPost);
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newPost;
         return state;
      default:
         return state;
   }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newPost) => ({ type: UPDATE_NEW_POST_TEXT, newPost: newPost, })

export default profileReducer;