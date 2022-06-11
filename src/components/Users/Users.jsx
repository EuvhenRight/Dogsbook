import React from 'react';
import classes from './Users.module.css';
import users_photo from '../../photos/users_photo.png';
import {NavLink} from "react-router-dom";
import {getFollowApi, getUnfollowApi} from "../API/Api";
import {setToggleFollowInProgress} from "../../redux/users-Reducer";


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={classes.numberPage}>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPages}
                             onClick={() => {
                                 props.onChangedPage(p)
                             }}>{p}</span>
            })
            }
        < / div>
        {props.users.map(u => <div key={u.id}>
            <div className={classes.users}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : users_photo} className={classes.avatar}/>
                </NavLink>
                <span>
                    <div>
                {u.followed ? <button disabled={props.isFetchingInProgress} onClick={() => {


                    props.setToggleFollowInProgress(true);

                    getUnfollowApi(u.id).then(data => {
                        if (data.resultCode == 0) {
                            props.unfollow(u.id);
                        }
                        props.setToggleFollowInProgress(false);
                    });

                }}>UnFollow</button> : <button disabled={props.isFetchingInProgress} onClick={() => {

                    props.setToggleFollowInProgress(true);

                    getFollowApi(u.id, {}).then(data => {

                        if (data.resultCode == 0) {
                            props.follow(u.id);
                        }
                        props.setToggleFollowInProgress(false);
                    });

                }}>Follow</button>}
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                    </span>
            </div>

        </div>)}
    </div>
}

export default Users;

