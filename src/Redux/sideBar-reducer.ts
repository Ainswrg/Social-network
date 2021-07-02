

type MenuType = {
   name: string
   id: string
}
type ImageType = {
   src: string
}
let initialState = {
   menu: [
      { name: 'Profile', id: '/profile' },
      { name: 'Message', id: '/dialogs' },
      { name: 'Users', id: '/users'},
      { name: 'News', id: '/news' },
      { name: 'Music', id: '/music' },
      { name: 'Settings', id: '/settings' },
      
   ] as Array<MenuType>,
   img: [
      { src: "https://cdn2.iconfinder.com/data/icons/office-square-flat-vol-1/100/avatar__male__student__user_-512.png" },
      { src: "https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png" },
      { src: "https://cdn0.iconfinder.com/data/icons/human-diversity-avatars-color/64/human-avatar-user-ui-account-square-512.png" },
   ] as Array<ImageType>,
}

export type InitialStateAction = typeof initialState

const sideBarReducer = (state = initialState, action: any): InitialStateAction => {
   switch(action.type) {

      default:
         return state;
   }

   
}

export default sideBarReducer;