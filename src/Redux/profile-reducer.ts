import { ResultCodeEnum } from './../api/api';
import { Dispatch } from 'redux';
import {  BaseThunkType, InferActionsTypes } from './redux-store';
import { profileAPI } from '../api/profiles-api'; 
import { PhotosType, PostType, ProfileType } from "../types/Types";


let initialState = {
   posts: [
      { id: 1, message: "Hi", likesCount: 25 },
      { id: 2, message: "How are you?", likesCount: 2 },
      { id: 3, message: "Yo", likesCount: 1 },
   ] as Array<PostType>,
   profile: null as ProfileType | null,
   status: "",
   newPostText: "",
};

const profileReducer = (
   state = initialState,
   action: ActionTypes
): InitalStateType => {
   switch (action.type) {
      case "SN/PROFILE/ADD_POST": {
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
      case "SN/PROFILE/SET_USER_PROFILE": {
         return {
            ...state,
            profile: action.profile,
         };
      }
      case "SN/PROFILE/SET_STATUS": {
         return {
            ...state,
            status: action.status,
         };
      }
      case "SN/PROFILE/DELETE_POST": {
         return {
            ...state,
            posts: state.posts.filter((p) => p.id !== action.postId),
         };
      }
      case "SN/PROFILE/SAVE_PHOTO_SUCCESS": {
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos } as ProfileType,
         };
      }
      default:
         return state;
   }
};

   export const profileActions = {
      addPostActionCreator: (
         newPostText: string
      ) => ({
         type: "SN/PROFILE/ADD_POST",
         newPostText,
      } as const),
      setUserProfile: (
         profile: ProfileType
      ) => ({
         type: "SN/PROFILE/SET_USER_PROFILE",
         profile,
      } as const),
      setStatus: (status: string) => ({
         type: "SN/PROFILE/SET_STATUS",
         status,
      } as const),
      deletePost: (postId: number) => ({
         type: "SN/PROFILE/DELETE_POST",
         postId,
      } as const),
      savePhotoSuccess: (
         photos: PhotosType
      ) => ({
         type: "SN/PROFILE/SAVE_PHOTO_SUCCESS",
         photos,
      } as const)
   }

export const getStatus = (userId: number): ThunkType => async (dispatch: DispatchType) => {
   const data = await profileAPI.getStatus(userId);

   dispatch(profileActions.setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch: DispatchType) => {
   try {
      const data = await profileAPI.updateStatus(status);
      if (data.resultCode === ResultCodeEnum.Success) {
         dispatch(profileActions.setStatus(status));
      }
   } catch (error) {}
};

export const savePhoto = (file: File) => async (dispatch: DispatchType) => {
   let data = await profileAPI.savePhotos(file);

   if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(profileActions.savePhotoSuccess(data.data.photos));
   }
};

export const saveProfile =
   (profile: ProfileType, actions: any): ThunkType =>
   async (dispatch, getState) => {
      const userId = getState().auth.userId;
      let data = await profileAPI.saveProfile(profile);

      if (data.resultCode === ResultCodeEnum.Success) {
         if(userId != null) {
            dispatch(getUserProfile(userId));
         } else {
            throw new Error("userId can't be null")
         }
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

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
   const data = await profileAPI.getProfile(userId);
   dispatch(profileActions.setUserProfile(data));
};

export default profileReducer;

export type InitalStateType = typeof initialState;
type ActionTypes = InferActionsTypes<typeof profileActions>

type DispatchType = Dispatch<ActionTypes>
type ThunkType = BaseThunkType<ActionTypes>