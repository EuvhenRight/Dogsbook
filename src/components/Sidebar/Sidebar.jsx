import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css'
import SidebarItems from './SidebarFriends';

const SelectedLink = ({ isActive }) => isActive ? classes.active : classes.link;


const Sidebar = (props) => {

    let sidebarElements =
        props.state.friends.map(d => <SidebarItems id={d.id} name={d.name} avatar={d.avatar} />);

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
            <div>
                <h3>Friends</h3>
                {sidebarElements}
            </div>
        </nav>
    )
}


export default Sidebar;