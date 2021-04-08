import {rerenderEntireTree} from './../render.js';

let state = {
   profilePage: {
      posts: [
         { id: 1, message: 'Hi', likesCount: 25 },
         { id: 2, message: 'How are you?', likesCount: 2 },
         { id: 3, message: 'Yo', likesCount: 1 },
      ],
      newPostText: 'Jaslan D',
   },
   dialogPage: {
      dialogs: [
         { id: 1, name: 'Tima' },
         { id: 2, name: 'Anya' },
         { id: 3, name: 'Sveta' },
         { id: 4, name: 'Yura' },
         { id: 5, name: 'Andrey' },
         { id: 6, name: 'Nastya' },
      ],
      messages: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'How are you?' },
         { id: 3, message: 'Yo' },
         { id: 4, message: 'Yo' },
      ],
   },
   sideBar: {
      menu: [
         { name: 'Profile', id: '/profile' },
         { name: 'Message', id: '/dialogs' },
         { name: 'News', id: '/news' },
         { name: 'Music', id: '/music' },
         { name: 'Settings', id: '/settings' },
      ],
      img: [
         {src: "https://cdn2.iconfinder.com/data/icons/office-square-flat-vol-1/100/avatar__male__student__user_-512.png"},
         {src: "https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png"},
         {src: "https://cdn0.iconfinder.com/data/icons/human-diversity-avatars-color/64/human-avatar-user-ui-account-square-512.png"},
      ],
   },
}

window.state = state;

export let addPost = () => {
   
   let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0,
   };
   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}

export default state;

