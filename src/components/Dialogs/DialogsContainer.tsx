import React from 'react';
import s from './Dialogs.module.css';
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchToPropsType = {
    sendMessage: ()=> void
    updateNewMessageBody: (body: string)=> void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage :()=>{
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody:(body: string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) //вызываем функцию 2 раза: вызываем функцию connect, она возвращает другую функцию , которую мы вызываем

export default DialogsContainer;