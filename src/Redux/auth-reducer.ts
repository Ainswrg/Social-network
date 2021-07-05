import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType2 = {
   userId: number | null;
   email: string | null;
   login: string | null;
   isAuth: boolean
   profile: object | null;
   captchaUrl: string | null;
}

let initialState = {
   userId: null as number | null,
   email: null as string | null,
   login: null as string | null,
   isAuth: false,
   profile: null as object | null,
   captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

// type InitializedSuccessActionType = {
//    type: typeof SET_USER_DATA
// }

const authReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
      case SET_PROFILE_DATA:
         return {
            ...state,
            ...action.payload
         };
      default:
         return state;
   }
};

type SetAuthUserDataActionPayloadType = {
   userId: number | null, 
   email: string | null, 
   login: string | null, 
   isAuth: boolean
}

type SetAuthUserDataActionType = {
   type: typeof SET_USER_DATA,
   payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
   type: SET_USER_DATA,
   payload: { userId, email, login, isAuth },
});


type getCaptchaUrlSuccessActionType = {
   type: typeof GET_CAPTCHA_URL_SUCCESS,
   payload: {captchaUrl: string },
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
   type: GET_CAPTCHA_URL_SUCCESS,
   payload: { captchaUrl },
});

export const setProfileData = (profile: object) => ({
   type: SET_PROFILE_DATA,
   profile,
});

export const getAuthUserData = () => async (dispatch: any) => {
   let response = await authAPI.me();

   if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
   }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string, actions: any) => {
   return async (dispatch: any) => {
      let response = await authAPI.login(email, password, rememberMe,captcha);
      if (response.data.resultCode === 0) {
         dispatch(getAuthUserData());
      } else {
         if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
         }
         let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some Error";
         actions.setStatus(message);
      }
      actions.setSubmitting(false);
   };
};

export const getCaptchaUrl = () => async (dispatch: any) => {
   const response = await securityAPI.getCaptchaUrl();
   const captchaUrl = response.data.url;

   dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => {
   return async (dispatch: any) => {
      let response = await authAPI.logout();
      if (response.data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false));
      }
   };
};

export default authReducer;