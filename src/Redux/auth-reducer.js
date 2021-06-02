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
            ...action.payload,
            isAuth: true,
         };
      case SET_PROFILE_DATA:
         return {
            ...state,
            ...action.payload,
         };

      default:
         return state;
   }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
   type: SET_USER_DATA,
   payload: { userId, email, login, isAuth },
});
export const setProfileData = (profile) => ({
   type: SET_PROFILE_DATA,
   profile,
});
export const getAuthUserData = () => (dispatch) => {
   authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
         let { id, email, login } = response.data.data;

         dispatch(setAuthUserData(id, email, login, true));
      }
   });
};

export const login = (email, password, rememberMe, actions) => {
   return (dispatch) => {
      authAPI
         .login(email, password, rememberMe, actions)
         .then((response) => {
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserData(email, password, rememberMe, true));
            } else {
               let message =
                  response.data.messages.length > 0
                     ? response.data.messages[0]
                     : "Some Error";
               console.log(message);
               actions.setStatus(message);
            }
            actions.setSubmitting(false);
         });
   };
};

export const logout = () => {
   return (dispatch) => {
      authAPI.logout().then((response) => {
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
         }
      });
   };
};

export default authReducer;
