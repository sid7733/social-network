import React from 'react';
//import s from './Dialogs.module.css';//
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchToPropsType = {
    sendMessage: ()=> void
    updateNewMessageBody: (body: string)=> void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType





let mapStateToProps = (state: AppStateType): MapStateToPropsType=> {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage :()=>{
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody:(body: string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }

    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent) //вызываем функцию 2 раза: вызываем функцию connect, она возвращает другую функцию , которую мы вызываем

export default DialogsContainer;