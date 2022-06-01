import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItems from './DialogItems/DialogsItems';
import MessagesItems from './MessagesItem/MessagesItem';

const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogElements =
        state.dialogs.map(d => <DialogsItems key={d.id} id={d.id} name={d.name} avatar={d.avatar} />);

    let messagesElements =
        state.messages.map(m => <MessagesItems key={m.id} id={m.id} message={m.message} />);

    let newPostTextMessage = state.newPostTextMessage;

    let sendMessageClick = () => {
        props.newMessageBody()
    };

    let newMessageText = (e) => {
        let body = e.target.value;
        props.updateMessageBody(body)
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
                        value={newPostTextMessage}>
                    </textarea></div>
                    <div><button onClick={sendMessageClick}>
                        add message</button></div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;