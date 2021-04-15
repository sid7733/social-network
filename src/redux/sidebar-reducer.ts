import {setAuthUserData} from "./auth-reducer";


const initialState={}

export type SidebarActionType = ReturnType<typeof setAuthUserData>  //need to fix

const sidebarReducer=(state: any=initialState,action: SidebarActionType)=>{


    return state
}

export default sidebarReducer