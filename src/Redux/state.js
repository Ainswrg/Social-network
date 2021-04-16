
let rerenderEntireTree = () => {
   console.log('State changed')
}
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
      newMessageText: 'Write message',
      messages: [
         { id: 1, message: 'Hello', time: '5:35'},
         // { id: 2, message: 'How are you?' },
         // { id: 3, message: 'Yo' },
         // { id: 4, message: 'Yo' },
      ],
      messageCurrentUser: [
         { id: 1, message: 'Hi', time: '5:35'},
         { id: 2, message: 'How a u?', time: '5:36'},
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

export const addPost = () => {
   
   let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0,
   };
   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}

export const subscribe = (observer) => {
   rerenderEntireTree = observer;
}

export const addMessage = () => {
   
   let newMessage = {
      id: 3,
      message: state.dialogPage.newMessageText,
      time: '5:48',
   };
   state.dialogPage.messageCurrentUser.push(newMessage);
   state.dialogPage.newMessageText = '';
   rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
   state.dialogPage.newMessageText = newText;
   rerenderEntireTree(state);
}

export default state;

