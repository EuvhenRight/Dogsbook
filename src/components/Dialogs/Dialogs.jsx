import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const SelectedDialog = ({ isActive }) => isActive ? classes.active : classes.dialogsItems;

const DialogItems = (props) => {
    return (
        <div>
            <NavLink className={SelectedDialog} to={'/dialogs/' + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}
const MessagesItems = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItems name='Vasya' id='1' />
                <DialogItems name='Harley' id='2' />
                <DialogItems name='Mira' id='3' />
                <DialogItems name='Richi' id='4' />
                <DialogItems name='Ken' id='5' />
            </div>
            <div className={classes.messages}>
                <MessagesItems message='How are you?' />
                <MessagesItems message='Hi!' />
                <MessagesItems message='You the best!' />
                <MessagesItems message='Nice' />
                <MessagesItems message='Beautyfull! ' />
            </div>
        </div>
    )
}

export default Dialogs;