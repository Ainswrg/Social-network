import home from "../assets/sidebar/home-solid.svg"
import Settings from "../assets/sidebar/settings.svg"
import Social from "../assets/sidebar/social.svg"
import Forum from "../assets/sidebar/Forum.svg"
import Music from "../assets/sidebar/bx-music.svg"
import News from "../assets/sidebar/bx-news.svg"

type MenuType = {
   name: string
   id: string
   src: any
}
type ImageType = {
   src: any
}
let initialState = {
   menu: [
      { name: 'Profile', id: '/profile', src: home },
      { name: 'Message', id: '/dialogs', src: Forum },
      { name: 'Users', id: '/users', src: Social },
      { name: 'News', id: '/news', src: News },
      { name: 'Music', id: '/music', src: Music },
      { name: 'Settings', id: '/settings', src: Settings },
      
   ] as Array<MenuType>,
   img: [ 
      {},
   ] as Array<ImageType>,
}

export type InitialNavStateAction = typeof initialState


const sideBarReducer = (state = initialState, action: any): InitialNavStateAction => {
   switch(action.type) {

      default:
         return state;
   }

   
}

export default sideBarReducer;