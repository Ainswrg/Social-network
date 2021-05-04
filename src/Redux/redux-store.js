import {combineReducers, createStore } from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer,
   sideBar: sideBarReducer,
   usersPage: usersReducer,
   auth: authReducer,
});

let store = createStore(reducers);
window.store = store;


export default store;