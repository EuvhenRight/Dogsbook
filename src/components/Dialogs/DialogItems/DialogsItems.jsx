import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css'

const SelectedDialog = ({ isActive }) => isActive ? classes.active : classes.dialogsItems;

const DialogsItems = (props) => {
    return (
        <div>
            <NavLink className={SelectedDialog} to={'/dialogs/' + props.id}>
                <img className={classes.dialogsavatar} src={props.avatar}></img>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogsItems;