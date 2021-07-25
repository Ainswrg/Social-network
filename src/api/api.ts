// import { authAPI } from './api';
import axios from "axios";
import { UserType } from "../types/Types";


export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'a9669977-6dbc-415c-a653-70657f4abf17',
   },
});

export enum ResultCodeEnum {
   Success = 0,
   Error = 1,
}

export enum ResultCodeForCaptchaEnum {
   CaptchaIsRequired = 10
}

export type GetItemsType = {
   items: Array<UserType>
   totalCount: number
   error: string | null
}
// instance.get<string>('auth/me').then((res: AxiosResponse<string>) => res.data.toUpperCase())

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
   data: D
   messages: Array<string>
   resultCode: RC
}
