import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   profile: false,
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true,
         };
      case SET_PROFILE_DATA:
         return {
            ...state,
            ...action.data,
         };

      default:
         return state;
   }
};

export const setAuthUserData = (userId, email, login) => ({
   type: SET_USER_DATA,
   data: { userId, email, login },
});
export const setProfileData = (profile) => ({
   type: SET_PROFILE_DATA,
   profile,
});
export const getAuthUserData = () => (dispatch) => {
   authAPI.getMe()
      .then((response) => {
         if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;

            dispatch(setAuthUserData(id, email, login));
         }
   });
};

export default authReducer;
