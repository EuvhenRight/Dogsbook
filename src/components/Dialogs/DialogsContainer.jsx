import React from 'react';
import {newMessageBodyActionCreator} from '../../redux/dialogs-Reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuhRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        newMessageBody: (newMessageBody) => { // тут newMessageBody працює з формою, для того щоб були зміни в Редакс-Формі
            dispatch(newMessageBodyActionCreator(newMessageBody)) //
        }
    }
}
// let AuthRedirectComponent = withAuthRedirect(Dialogs); // Хок на редирект, коли ти не за логінений тебе не пустить на страницю
//
// const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); // змінили на compose

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs);

// export default DialogsContainer;