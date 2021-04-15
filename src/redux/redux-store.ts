import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {addPost, ProfileActionType, updateNewPostText} from "./profile-reducer";
import dialogsReducer, {DialogsActionType, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import sidebarReducer, {SidebarActionType} from "./sidebar-reducer";
import usersReducer, {UsersActionType} from "./users-reducer";
import authReducer, {AuthActionType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionType = UsersActionType |
    ProfileActionType |
    DialogsActionType |
    AuthActionType |
    SidebarActionType

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ReduxStoreType  = typeof  store



// @ts-ignore
window.store=store

export default store