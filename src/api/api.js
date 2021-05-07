import * as axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'a9669977-6dbc-415c-a653-70657f4abf17',
   },
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`
      ).then(response => response.data)
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId) {
      return instance.delete(`unfollow/${userId}`)
   },
};

export const authAPI = {
   getMe() {
      return instance.get(`auth/me`)
   }
};

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
   }
};
