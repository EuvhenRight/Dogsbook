import React from 'react';
// import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'
import DialogsItems from './DialogItems/DialogsItems';
import MessagesItems from './MessagesItem/MessagesItem';
// import index from '../../index.jsx';

const Dialogs = (props) => {

    let dialogElements =
        props.state.dialogs.map(d => <DialogsItems id={d.id} name={d.name} />);

    let dialogAvatar =
        props.state.dialogs.map(d => <DialogsItems avatar={d.avatar} />);

    let messagesElements =
        props.state.messages.map(m => <MessagesItems id={m.id} message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/* 
                <div className={classes.img}>

                </div> */}
                {dialogAvatar}
                {dialogElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;