import React, {ComponentType} from 'react';
//import s from './Dialogs.module.css';//
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
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

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);