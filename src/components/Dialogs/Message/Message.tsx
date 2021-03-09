import React from 'react';
import s from './../Dialogs.module.css';
import {MessageType} from "../../../redux/dialogs-reducer";

const Message = (message: MessageType) => {
    return <div className={s.dialog}>{message.message}</div> //message:....??????
}

export default Message;