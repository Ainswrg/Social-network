const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [
      { id: 1, message: 'Hi', likesCount: 25 },
      { id: 2, message: 'How are you?', likesCount: 2 },
      { id: 3, message: 'Yo', likesCount: 1 },
   ],
   newPostText: '',
}

const profileReducer = (state = initialState, action) => {

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