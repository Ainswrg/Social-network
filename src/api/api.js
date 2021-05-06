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
   }
};

export const authAPI = {
   getAuthMe() {
      return instance.get(`auth/me`
      ).then(response => response.data)
   }
};

export const profileAPI = {
   getProfile() {
      return instance.get(`profile/2`
      ).then(response => response.data)
   }
};

export const followAPI = {
   setFollow(id) {
      return instance.post(`follow/${id}`
      ).then(response => response.data)
   },
   setUnfollow(id) {
      return instance.delete(`unfollow/${id}`
      ).then(response => response.data)
   }
};
