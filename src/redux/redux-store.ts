import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

// export type MessageType = {
//     id: number,
//     message: string
// }
//
// export type DialogsType = {
//     id: number,
//     name: string
// }
//
// export type PostType = {
//     id: number,
//     message: string,
//     likesCount: number
// }
//
// export type DialogsPageType = {
//     dialogs: Array<DialogsType>,
//     messages: Array<MessageType>,
//     newMessageBody: string
// }
//
// export type ProfilePageType = {
//     posts: Array<PostType>
//     newPostText: string
// }
//
// export type SidebarType = {}
//
// export type RootStateType = {
//     profilePage: ProfilePageType,
//     dialogsPage: DialogsPageType,
//     sidebar: SidebarType
// }

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ReduxStoreType  = typeof  store



// @ts-ignore
window.store=store

export default store