import React, { createRef } from 'react';
// import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css'
import Messages from './Messages'
import { updateNewPostMessage, DialogMessage, newMessageText } from '../../../redux/state';

const MessagesItems = (props) => {

    let messagesElement = props.messages.map(mes => <Messages id={mes.id} message={mes.message} />);

    let newMessages = createRef();

    let addDialogMessage = () => {
        let textMes = newMessages.current.value;
        props.DialogMessage(textMes);
        newMessages.current.value = '';
    };

    let addTextMessages = () => {
        let textMes = newMessages.current.value;
        props.updateNewPostMessage(textMes);
    };


    return (
        <div className={classes.message}>

            {props.message}
            <div>
                <textarea
                    onChange={addTextMessages}
                    ref={newMessages}
                    value={props.newMessageText} />
            </div>
            <button onClick={addDialogMessage}>Add posts</button>
            <div>
                {props.messages}
            </div>
            <div>
                {messagesElement}
            </div>
        </div>
    )
}

export default MessagesItems;