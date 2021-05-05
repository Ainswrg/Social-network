const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         };
      }
      default:
         return state;
   }
};

export const setUserProfile = (profile) => ({
   type: SET_USER_PROFILE,
   profile,
});
export const setAuthUserData = (userId, email, login) => ({
   type: SET_USER_DATA,
   data: { userId, email, login },
});

export default authReducer;