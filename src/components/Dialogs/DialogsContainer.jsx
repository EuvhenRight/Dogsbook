import React from 'react';
import { newMessageBodyActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogs-Reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuhRedirect";
import {compose} from "redux";


let mapStateToProps =(state) => {
    return {
        dialogPage: state.dialogPage,
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
// let AuthRedirectComponent = withAuthRedirect(Dialogs); // Хок на редирект, коли ти не за логінений тебе не пустить на страницю
//
// const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    withAuthRedirect,
    connect (mapStateToProps, mapDispatchToProps))(Dialogs);

// export default DialogsContainer;