import React from 'react';
// import { NavLink } from 'react-router-dom';
// import classes from './../Dialogs.module.css'

const SidebarItems = (props) => {
    return (
        <div>
            <div>
                {props.name}
            </div>
            {props.avatar}
        </div>
    )
}

export default SidebarItems;