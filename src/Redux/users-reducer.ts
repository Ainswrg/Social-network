import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { usersAPI } from "../api/users-api";
import { UserType } from "../types/Types";
import { updateObjectInArray } from "../utils/object-helper";
import { Dispatch } from "redux";


let initialState = {
   users: [] as Array<UserType>,
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: [] as Array<number>, //array of user Ids
};

const usersReducer = (
   state = initialState,
   action: ActionsTypes
): InitialStateAction => {
   switch (action.type) {
      case "FN/USERS/FOLLOW":
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", {
               followed: true,
            }),
         };
      case "SN/USERS/UNFOLLOW":
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", {
               followed: false,
            }),
         };
      case "SN/USERS/SET_USERS": {
         return { ...state, users: action.users };
      }
      case "SN/USERS/SET_CURRENT_PAGE": {
         return { ...state, currentPage: action.currentPage };
      }
      case "SN/USERS/SET_TOTAL_USERS_COUNT": {
         return { ...state, totalUsersCount: action.count };
      }
      case "SN/USERS/TOGGLE_IS_FETCHING": {
         return { ...state, isFetching: action.isFetching };
      }
      case "SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS": {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter((id) => id !== action.userId),
         };
      }
      default:
         return state;
   }
};

export const usersActions = {
   followSuccess: (userId: number) => ({type: 'FN/USERS/FOLLOW',userId} as const) ,
   unfollowSuccess: (userId: number) => ({type: 'SN/USERS/UNFOLLOW',userId} as const),
   setUsers: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS',users} as const),
   setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE',currentPage} as const),
   setTotalUsersCount: (totalUsersCount: number) => ({type: 'SN/USERS/SET_TOTAL_USERS_COUNT',count: totalUsersCount} as const),
   toggleIsFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING',isFetching} as const),
   toggleFollowingInProgress: (isFetching: boolean,userId: number) => ({type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',isFetching,userId} as const),
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
   return async (dispatch, getState) => {
      // getState()
      dispatch(usersActions.toggleIsFetching(true));
      dispatch(usersActions.setCurrentPage(page));

      let data = await usersAPI.getUsers(page, pageSize);

      dispatch(usersActions.toggleIsFetching(false));
      dispatch(usersActions.setUsers(data.items));
      dispatch(usersActions.setTotalUsersCount(data.totalCount));
   };
};

const _followUnfollowFlow = async (
   dispatch: Dispatch<ActionsTypes>,
   userId: number,
   apiMethod: any,
   actionCreator: (userId: number) => ActionsTypes
) => {
   dispatch(usersActions.toggleFollowingInProgress(true, userId));
   let response = await apiMethod(userId);
   if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
   }
   dispatch(usersActions.toggleFollowingInProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
   return async (dispatch) => {
      _followUnfollowFlow(
         dispatch,
         userId,
         usersAPI.follow.bind(usersAPI),
         usersActions.followSuccess
      );
   };
};

export const unfollow = (userId: number): ThunkType => {
   return async (dispatch) => {
      _followUnfollowFlow(
         dispatch,
         userId,
         usersAPI.unfollow.bind(usersAPI),
         usersActions.unfollowSuccess
      );
   };
};

type InitialStateAction = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof usersActions>
type ThunkType = BaseThunkType<ActionsTypes>;

export default usersReducer;
