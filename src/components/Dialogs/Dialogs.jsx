import React from 'react';
// import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'
import DialogsItems from './DialogItems/DialogsItems';
import MessagesItems from './MessagesItem/MessagesItem';
// import index from '../../index.jsx';

const Dialogs = (props) => {

    let dialogElements =
        props.dialogs.map(d => <DialogsItems id={d.id} name={d.name} />);

    let messagesElements =
        props.messages.map(m => <MessagesItems id={m.id} message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;