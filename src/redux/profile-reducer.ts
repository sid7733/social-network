import {usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionType, AppStateType} from "./redux-store";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE'




export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type InitialStateType={
    posts: Array<PostType>,
    newPostText: string,
    profile: ProfileType | null
}


export type ProfileType={
    userId: number,
    status: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType,
    photos: PhotosType,
}

type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

type PhotosType={
    small:string,
    large: string
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'It\'s my second post', likesCount: 13},
        {id: 4, message: 'It\'s my third post', likesCount: 7},
        {id: 5, message: 'It\'s my fourth post', likesCount: 3}
    ],
    newPostText: '',
    profile: null
}

// export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state
    }
}


export const addPost = () => ({ type: ADD_POST}) as const
export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile: profile}) as const

export type ProfileActionType = ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof setUserProfile>

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionType>

export const getUserProfile = (userId: number): ThunkType => (dispatch: ThunkDispatchType )=> {
    usersAPI.getProfile(userId)
        .then(response => {

            dispatch(setUserProfile(response.data))
        })
}


export default profileReducer