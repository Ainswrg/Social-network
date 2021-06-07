import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
   posts: [
      { id: 1, message: "Hi", likesCount: 25 },
      { id: 2, message: "How are you?", likesCount: 2 },
      { id: 3, message: "Yo", likesCount: 1 },
   ],
   // newPostText: "",
   profile: null,
   status: "",
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: action.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: "",
         };
      }
      // case UPDATE_NEW_POST_TEXT: {
      //    return {
      //       ...state,
      //       newPostText: action.newPost,
      //    };
      // }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         };
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status,
         };
      }
      default:
         return state;
   }
};

// export const onPostChange = () => ({ type: ADD_POST });
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
// export const updateNewPostText = (newPost) => ({
//    type: UPDATE_NEW_POST_TEXT,newPost: newPost,});

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setUserProfile = (profile) => ({ 
   type: SET_USER_PROFILE, profile,});


export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId)
      .then( response => {
         dispatch(setStatus(response.data));
         // if(response.data === null) {
         //    return;
         // }
         
      });
};

export const updateStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status)
      .then(response => {
         if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
         }
   });
};

export const getUserProfile = (userId) => (dispatch) => {
   profileAPI.getProfile(userId)
      .then( response => {
         dispatch(setUserProfile(response.data));
      });
};

export default profileReducer;
