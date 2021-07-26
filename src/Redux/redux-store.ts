import {Action, applyMiddleware, combineReducers, compose, createStore } from "redux"
import dialogReducer from "./dialog-reducer"
import profileReducer from "./profile-reducer"
import sideBarReducer from "./sideBar-reducer"
import authReducer from "./auth-reducer"
import usersReducer from "./users-reducer"
import thunkMiddleWare, { ThunkAction } from 'redux-thunk'
import appReducer from "./app-reducer"


let rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer,
   sideBar: sideBarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer,
});

type RootReducerType = typeof rootReducer; //(globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));
// @ts-ignore
window.__store__ = store


export default store