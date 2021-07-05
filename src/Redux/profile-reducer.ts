import { profileAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/Types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";



let initialState = {
   posts: [
      { id: 1, message: "Hi", likesCount: 25 },
      { id: 2, message: "How are you?", likesCount: 2 },
      { id: 3, message: "Yo", likesCount: 1 },
   ] as Array<PostType>,
   profile: null as ProfileType | null,
   status: '',
   newPostText: '',
};

export type InitalStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitalStateType => {
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
         };
      }
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
      case DELETE_POST: {
         return {
            ...state,
            posts: state.posts.filter((p) => p.id !== action.postId),
         };
      }
      case SAVE_PHOTO_SUCCESS: {
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos } as ProfileType,
         };
      }
      default:
         return state;
   }
};

type AddPostActionCreatorActionType = {
   type: typeof ADD_POST
   newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({
   type: ADD_POST,
   newPostText,
});

type SetUserProfileActionType = {
   type: typeof SET_USER_PROFILE
   profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
   type: SET_USER_PROFILE,
   profile,
});

type SetStatusActionType = {
   type: typeof SET_STATUS
   status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });

type DeletePostActionType = {
   type: typeof DELETE_POST
   postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });

type SavePhotoSuccessActionType = {
   type: typeof SAVE_PHOTO_SUCCESS
   photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
   type: SAVE_PHOTO_SUCCESS,
   photos,
});

export const getStatus = (userId: number) => async (dispatch: any) => {
   let response = await profileAPI.getStatus(userId);

   dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
   try {
      let response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
         dispatch(setStatus(status));
      }
   } catch(error) {
      
   }
   
};

export const savePhoto = (file: PhotosType) => async (dispatch: any) => {
   let response = await profileAPI.savePhotos(file);

   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
   }
};

export const saveProfile = (profile: ProfileType, actions: any) => async (dispatch: any, getState: any) => {
   const userId = getState().auth.userId;
   let response = await profileAPI.saveProfile(profile);

   if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
   } else {
      let error =
         response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some Error";
      actions.setStatus(error);

      actions.setSubmitting(false);
      return Promise.reject(response.data.messages[0]);
   }
};

export const getUserProfile = (userId: number) => async (dispatch: any) => {
   let response = await profileAPI.getProfile(userId);
   dispatch(setUserProfile(response.data));
};

export default profileReducer;