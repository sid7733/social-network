import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {followAC, setUsersAC, unfollowAC} from "./users-reducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionType) => void
}

type MessageType = {
    id: number,
    message: string
}

type DialogType = {
    id: number,
    name: string,
    avatar: string
}

type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageBody: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

export type ActionType = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
                {id: 3, message: 'It\'s my second post', likesCount: 13},
                {id: 4, message: 'It\'s my third post', likesCount: 7},
                {id: 5, message: 'It\'s my fourth post', likesCount: 3}
            ],
            newPostText: 'it-kamasutra',

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych', avatar: ''},
                {id: 2, name: 'Andrey', avatar: ''},
                {id: 3, name: 'Sveta', avatar: ''},
                {id: 4, name: 'Sasha', avatar: ''},
                {id: 5, name: 'Victor', avatar: ''},
                {id: 6, name: 'Valera', avatar: ''}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback    // pattern observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

// @ts-ignore
    window.store = store