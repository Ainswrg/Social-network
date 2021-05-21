import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Hi', likesCount: 25 },
            { id: 2, message: 'How are you?', likesCount: 2 },
            { id: 3, message: 'Yo', likesCount: 1 },
         ],
         newPostText: '',
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
         newMessageBody: "",
         incomingMessages: [
            { id: 1, message: 'Hello', time: '5:35' },
         ],
         outgoingMessages: [
            { id: 2, message: 'Hi', time: '5:35' },
            { id: 3, message: 'How a u?', time: '5:36' },
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
            { src: "https://cdn2.iconfinder.com/data/icons/office-square-flat-vol-1/100/avatar__male__student__user_-512.png" },
            { src: "https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png" },
            { src: "https://cdn0.iconfinder.com/data/icons/human-diversity-avatars-color/64/human-avatar-user-ui-account-square-512.png" },
         ],
      },
   },
   _callSubscriber() {
      console.log('state changed');
   },

   getState() {
      return this._state;
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
      this._state.sideBar = sideBarReducer(this._state.sideBar, action);

      this._callSubscriber(this._state);
   }
}


// window.store = store;

// export default store;

