import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css'
import SidebarItems from './SidebarItems/SidebarItems';

const SelectedLink = ({ isActive }) => isActive ? classes.active : classes.link;


const Sidebar = (props) => {

    let sidebarElements =
        props.friends.map(s => <SidebarItems key={s.id} id={s.id} name={s.name} avatar={s.avatar} />);

    return (
        <nav className={classes.sidebar}>
            <div className={classes.link}>
                <NavLink className={SelectedLink} to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={SelectedLink}>Message</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={SelectedLink}>Users</NavLink>
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
                <NavLink to='/login' className={SelectedLink}>Login</NavLink>
            </div>
            <div className={classes.sidebarData}>
                <h3>Friends</h3>
                <div className={classes.sidebarMain}>
                    {sidebarElements}
                </div>
            </div>
        </nav>
    )
}


export default Sidebar;