import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements =
        state.dialogs.map(d => <DialogItem id={d.id} key={d.id } name={d.name} avatar={d.avatar}/>);

    let messagesElements =
        state.messages.map(m => <Message id={m.id} key={m.id } message={m.message}/>)

    let newMessageBody =
        state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    /*if (!props.isAuth) return <Redirect to="/login"/>*/ //проверить нужна ли эта строка?????

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}
                    <div/>
                    <div>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder='Enter your message'></textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;