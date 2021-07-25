import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { AppStateType } from './redux-store';
import { profileAPI } from '../api/profiles-api'; 
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
   status: "" as string,
   newPostText: "" as string,
};

export type InitalStateType = typeof initialState;

const profileReducer = (
   state = initialState,
   action: ActionTypes
): InitalStateType => {
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

type ActionTypes =
   | AddPostActionCreatorActionType
   | SetUserProfileActionType
   | SetStatusActionType
   | DeletePostActionType
   | SavePhotoSuccessActionType;

type AddPostActionCreatorActionType = {
   type: typeof ADD_POST;
   newPostText: string;
};
export const addPostActionCreator = (
   newPostText: string
): AddPostActionCreatorActionType => ({
   type: ADD_POST,
   newPostText,
});

type SetUserProfileActionType = {
   type: typeof SET_USER_PROFILE;
   profile: ProfileType;
};
export const setUserProfile = (
   profile: ProfileType
): SetUserProfileActionType => ({
   type: SET_USER_PROFILE,
   profile,
});

type SetStatusActionType = {
   type: typeof SET_STATUS;
   status: string;
};
export const setStatus = (status: string): SetStatusActionType => ({
   type: SET_STATUS,
   status,
});

type DeletePostActionType = {
   type: typeof DELETE_POST;
   postId: number;
};
export const deletePost = (postId: number): DeletePostActionType => ({
   type: DELETE_POST,
   postId,
});

type SavePhotoSuccessActionType = {
   type: typeof SAVE_PHOTO_SUCCESS;
   photos: PhotosType;
};
export const savePhotoSuccess = (
   photos: PhotosType
): SavePhotoSuccessActionType => ({
   type: SAVE_PHOTO_SUCCESS,
   photos,
});

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getStatus = (userId: number): ThunkType => async (dispatch: DispatchType) => {
   const data = await profileAPI.getStatus(userId);

   dispatch(setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch: DispatchType) => {
   try {
      const data = await profileAPI.updateStatus(status);
      if (data.resultCode === 0) {
         dispatch(setStatus(status));
      }
   } catch (error) {}
};

export const savePhoto = (file: PhotosType) => async (dispatch: DispatchType) => {
   let data = await profileAPI.savePhotos(file);

   if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
   }
};

export const saveProfile =
   (profile: ProfileType, actions: any) =>
   async (dispatch: any, getState: any) => {
      const userId = getState().auth.userId;
      let data = await profileAPI.saveProfile(profile);

      if (data.resultCode === 0) {
         dispatch(getUserProfile(userId));
      } else {
         let error =
            data.messages.length > 0
               ? data.messages[0]
               : "Some Error";
         actions.setStatus(error);

         actions.setSubmitting(false);
         return Promise.reject(data.messages[0]);
      }
   };

export const getUserProfile = (userId: number) => async (dispatch: DispatchType) => {
   const data = await profileAPI.getProfile(userId);
   dispatch(setUserProfile(data));
};

export default profileReducer;
