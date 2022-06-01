import React from 'react';
import { newMessageBodyActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogs-Reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps =(state) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps =(dispatch)=> {
    return {
        updateMessageBody: (body) => {
            dispatch(updateMessageBodyActionCreator(body))
            },
        newMessageBody: () => {
            dispatch(newMessageBodyActionCreator())
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;