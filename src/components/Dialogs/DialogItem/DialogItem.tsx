import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/dialogs-reducer";


const DialogItem = (dialog: DialogType) => {
    let path = "/dialogs/" + dialog.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{dialog.name}</NavLink>
    </div>
}

export default DialogItem;