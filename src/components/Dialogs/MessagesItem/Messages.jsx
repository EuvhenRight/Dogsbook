import React from 'react';
// // import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css'

const Messages = (props) => {

    return (
        <div className={classes.newMessages}>
            {props.message}
        </div>
    )
}

export default Messages;