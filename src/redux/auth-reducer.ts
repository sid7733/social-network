import {ActionType} from "./store";


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


const authReducer = (state = initialState, action: ActionType): InitialStateType => {
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

н

export default authReducer