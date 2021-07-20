// import { authAPI } from './api';
import { ProfileType } from './../types/Types';
import axios, { AxiosResponse } from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'a9669977-6dbc-415c-a653-70657f4abf17',
   },
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
   },
   follow(userId: number) {
      return instance.post(`follow/${userId}`);
   },
   unfollow(userId: number) {
      return instance.delete(`follow/${userId}`);
   },
   getProfile(userId: number) {
      console.warn('Obsolete method. Please profileAPI object.')
      return profileAPI.getProfile(userId);
   }
};

export const profileAPI = {
   getProfile(userId: number) {
      return instance.get(`/profile/${userId}`);
   },
   getStatus(userId: number) {
      return instance.get(`/profile/status/${userId}`);
   },
   updateStatus(status: string) {
      return instance.put(`/profile/status`, { status: status });
   },
   savePhotos(photoFile: any) {
      const formData = new FormData();
      formData.append("image", photoFile)
      return instance.put(`/profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   },
   saveProfile(profile: ProfileType) {
      return instance.put(`/profile`, profile);
   }
};

export enum ResultCodeEnum {
   Success = 0,
   Error = 1,
}

export enum ResultCodeForCaptcha {
   CaptchaIsRequired = 10
}


type MeResponseType = {
   data: { 
      id: number, 
      email: string, 
      login: string 
   }
   resultCode: ResultCodeEnum
   messages: Array<string>
}

type LoginResponseType = {
   data: {
      dataId: number
   }
   resultCode: ResultCodeEnum | ResultCodeForCaptcha
   messages: Array<string>
}
type LogoutResponseType = {
   data: object
   resultCode: ResultCodeEnum
   messages: Array<string>
}

export const authAPI = {
   me() {
      return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
   },
   login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
      return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
         .then(res => res.data)
   },
   logout() {
      return instance.delete<LogoutResponseType>(`auth/login`);
   },
}; 
// instance.get<string>('auth/me').then((res: AxiosResponse<string>) => res.data.toUpperCase())

export const securityAPI = {
   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`);
   }
}; 
