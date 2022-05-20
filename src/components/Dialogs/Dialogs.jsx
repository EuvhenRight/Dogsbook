import React from 'react';
// import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'
import DialogsItems from './DialogItems/DialogsItems';
import MessagesItems from './MessagesItem/MessagesItem';
import { newMessageBodyActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogs-Reducer';
// import index from '../../index.jsx';

const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;

    let dialogElements =
        state.dialogs.map(d => <DialogsItems id={d.id} name={d.name} avatar={d.avatar} />);

    let messagesElements =
        state.messages.map(m => <MessagesItems id={m.id} message={m.message} />);

    let newPostTextMessage = state.newPostTextMessage;

    let sendMessageClick = () => {
        props.store.dispatch(newMessageBodyActionCreator())
    };

    let newMessageText = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateMessageBodyActionCreator(body))
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        placeholder='enter message'
                        onChange={newMessageText}
                        value={newPostTextMessage}
                    ></textarea></div>
                    <div><button onClick={sendMessageClick}>
                        add message</button></div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;