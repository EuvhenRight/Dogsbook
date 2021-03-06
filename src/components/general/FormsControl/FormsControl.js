import React from "react";
import classes from "./FormControl.module.css"
import {Field} from "redux-form";
import {required} from "../Validations/Validations";


export const Textarea = ({input, meta, ...props}) => { // REST  оператор, беремо не всі пропси, а тільки ті які нам потрібні
    const hasError = meta.touched && meta.error;  // Деструктурізація - якщо ти торкнувся або в інпуте помилка
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <textarea {...input} {...props}/>
            <div>
                {/*Якщо в тебе будуть ошибкі при вводі */}
                {hasError && <span>{meta.error}</span>}
            </div>

        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <input {...input} {...props}/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const createField = (placeholder, name, component, validate, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validate}
               {...props}/> {text}
    </div>
)