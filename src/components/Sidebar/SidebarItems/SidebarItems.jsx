import React from 'react';
import classes from '../Sidebar.module.css'


const SidebarItems = (props) => {
    return (
        <div className={classes.sidebarFriends}>
            <div>
                <img className={classes.avatar} src={props.avatar} />
                {props.name}
            </div>
        </div>
    )
}

export default SidebarItems;
