import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return (
        <header className={classes.header}>
            < img alt={"ava"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiY9CtX21K0zU8hBSEzDLqVwD9gXuUfi8seJ96PdelduVCwuCCPtOZ9Q9fKzyoplDDQaU&usqp=CAU"/>
            <div className={classes.loginblock}>
                {props.isAuth ? <div>
                        {props.login} <button onClick={props.logoutThunk}>Logout</button></div> :
                    <NavLink to={"/login"}>Login</NavLink>}

            </div>
        </header>
    )
}


export default Header;