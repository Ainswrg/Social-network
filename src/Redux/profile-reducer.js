const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
   posts: [
      { id: 1, message: 'Hi', likesCount: 25 },
      { id: 2, message: 'How are you?', likesCount: 2 },
      { id: 3, message: 'Yo', likesCount: 1 },
   ],
   newPostText: '',
   profile: null,
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         }
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newPost,
         }
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         }
      }
      default:
         return state;
   }

}

export const onPostChange = () => ({ type: ADD_POST })
export const updateNewPostText = (newPost) => ({ type: UPDATE_NEW_POST_TEXT, newPost: newPost, })
export const setUserProfile = (profile) => ({type:  SET_USER_PROFILE, profile})

export default profileReducer;