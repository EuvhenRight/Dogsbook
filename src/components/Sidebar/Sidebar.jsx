import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css'


const SelectedLink = ({ isActive }) => isActive ? classes.active : classes.link;


const Sidebar = () => {
    return (
        <nav className={classes.sidebar}>
            <div className={classes.link}>
                <NavLink className={SelectedLink} to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={SelectedLink}>Message</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={SelectedLink}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={SelectedLink}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={SelectedLink}>Settings</NavLink>
            </div>
        </nav>
    )
}


export default Sidebar;