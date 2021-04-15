import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionType, AppStateType} from "./redux-store";


export type InitialStateType = {
    userId:  number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}

const initialState: InitialStateType = {
    userId:  null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export type AuthActionType = ReturnType<typeof setAuthUserData>

const authReducer = (state = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => ({   //??? нужно ли добавить в тип |null ???
    type: SET_AUTH_USER_DATA, data: {userId, email, login}}) as const


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionType>

export const getAuthUserData = (): ThunkType=>(dispatch: ThunkDispatchType)=>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode===0){
                let {id,  email, login} = response.data.data
                dispatch(setAuthUserData (id,  email, login))
            }
        })
}


export default authReducer