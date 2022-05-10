import React from 'react';
// import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'
import DialogsItems from './DialogItems/DialogsItems';
import MessagesItems from './MessagesItem/MessagesItem';
// import index from '../../index.jsx';

const Dialogs = (props) => {

    let dialogElements =
        props.state.dialogs.map(d => <DialogsItems id={d.id} name={d.name} avatar={d.avatar} />);

    let messagesElements =
        props.state.messages.map(m => <MessagesItems id={m.id} message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <MessagesItems
                messages={props.dialogPage.messages}
                newMessageText={props.dialogPage.newMessageText}
                updateNewPostText={props.updateNewPostText}
                DialogMessage={props.DialogMessage}
            />
        </div>
    )
}

export default Dialogs;