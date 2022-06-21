import React from 'react';
import classes from './Dialogs.module.css'
import {Field, reduxForm} from "redux-form"; // форма для введення месседжів


const DialogsForm = (props) => {

    let newPostEnterMessage = (e) =>{ // функція яка відправляє повідомлення по кнопці "Ентер"
        if(e.key === "Enter") {
            props.handleSubmit()
        }
    }
    return ( // дестретуктурізація  props.handleSubmit
        <form onSubmit={newPostEnterMessage}>
            <div>
                <Field
                    component={"textarea"}
                    name={"newPostTextMessage"} // имʼя компоненти "textarea"
                    placeholder={"enter message"}
                    onKeyPress={newPostEnterMessage} // onKeyPress - назва функціі
                />
            {/*  handleSubmit - це Редакс-Форма, в ньому йде формування всіх процесів в формі   */}
            </div>
            <div>
                <button>
                    Add message
                </button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: "Dialogs"})(DialogsForm); // робимо упаковку для форми для того щоб їй
// купував DialogsReduxForm (Редакс-Форма)

export default DialogsReduxForm;