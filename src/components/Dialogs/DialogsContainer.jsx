import React from 'react';
import { newMessageBodyActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogs-Reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//
// const DialogsContainer = (props) => {
//
//
//     let state = props.store.getState().dialogPage;
//
//     let sendMessageClick = () => {
//         props.store.dispatch(newMessageBodyActionCreator())
//     };
//
//     let newMessageText = (body) => {
//         props.store.dispatch(updateMessageBodyActionCreator(body))
//     };
//
//     return (<Dialogs
//         updateMessageBody={newMessageText}
//         newMessageBody={sendMessageClick}
//         dialogPage={state}/>)
// }


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