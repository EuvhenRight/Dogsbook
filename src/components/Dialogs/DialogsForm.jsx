import React from 'react';
import classes from './Dialogs.module.css'
import {Field, reduxForm} from "redux-form"; // форма для ведення месседжів
import {Textarea} from "../general/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../general/Validations/Validations";


const maxLength100 = maxLengthCreator(100);

const DialogsForm = (props) => {

    // let newPostEnterMessage = (e) =>{ // функція яка відправляє повідомлення по кнопці "Ентер"
    //     if(e.key === "Enter") {
    //         props.handleSubmit()
    //     }
    // }
    return ( // дестретуктурізація  props.handleSubmit
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newPostTextMessage"} // имʼя компоненти "textarea"
                    placeholder={"enter message"}
                    validate={[required, maxLength100]}
                    // onKeyPress={} // onKeyPress - назва функціі
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