import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItems from './DialogItems/DialogsItems';
import MessagesItems from './MessagesItem/MessagesItem';
import DialogsReduxForm from "./DialogsForm";


const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogElements =
        state.dialogs.map(d => <DialogsItems key={d.id} id={d.id} name={d.name} avatar={d.avatar} />);

    let messagesElements =
        state.messages.map(m => <MessagesItems key={m.id} id={m.id} message={m.message} />);

    // let newPostTextMessage = state.newPostTextMessage; дані зі старого стейта

    // let sendMessageClick = () => {
    //     props.newMessageBody()
    // };

  let addNewMessageClick = (values) => {
        props.newMessageBody(values.newPostTextMessage) // нова функція котра бере з пропсів newMessageBody та
      // та передає данні(нові мессаджі) для форми, newPostTextMessage - назва Fielda в DialogsForm який відповідає за
      // "textarea"
  };

    // if(!props.isAuth) return <Navigate to={"/login"} />; - це була строка яка не пускада нас на сайт,
    // як що ми не за логинились, зараз ми зробили

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                   <DialogsReduxForm onSubmit={addNewMessageClick} />
                {/* Сюди вводим  addNewMessageClick - це функція відповідає за відправку месседжів */}
                </div>
            </div>
        </div>
    )
}


export default Dialogs;