import {combineReducers, createStore } from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer,
   sideBar: sideBarReducer,
});

let store = createStore(reducers);
window.store = store;


export default store;