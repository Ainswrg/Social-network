let initialState = {
   menu: [
      { name: 'Profile', id: '/profile' },
      { name: 'Message', id: '/dialogs' },
      { name: 'Users', id: '/users'},
      { name: 'News', id: '/news' },
      { name: 'Music', id: '/music' },
      { name: 'Settings', id: '/settings' },
      
   ],
   img: [
      { src: "https://cdn2.iconfinder.com/data/icons/office-square-flat-vol-1/100/avatar__male__student__user_-512.png" },
      { src: "https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png" },
      { src: "https://cdn0.iconfinder.com/data/icons/human-diversity-avatars-color/64/human-avatar-user-ui-account-square-512.png" },
   ],
}

const sideBarReducer = (state = initialState, action) => {
   

   return state;
}

export default sideBarReducer;