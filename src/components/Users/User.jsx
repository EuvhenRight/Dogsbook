import React from 'react';
import classes from './Users.module.css';
import users_photo from '../../photos/users_photo.png';
import {NavLink} from "react-router-dom";


let User = ({user, isFetchingInProgress, unfollow, follow}) => {

    return (
            <div className={classes.users}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : users_photo}
                         className={classes.avatar}/>
                </NavLink>
                <span>
                    <div>
                {user.followed ? <button disabled={isFetchingInProgress.some(id => id === user.id)}
                                         onClick={() => {
                                             unfollow(user.id)
                                         }}>UnFollow</button> :
                    <button disabled={isFetchingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}
                    </div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    </span>
            </div>)}

export default User;