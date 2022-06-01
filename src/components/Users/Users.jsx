import React from 'react';
import classes from './Users.module.css';
import users_photo from '../../photos/users_photo.png';


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
                    <span>
                    <img className={classes.avatar} src={u.photos.small != null ? u.photos.small : users_photo}/>
                    </span>
                <span>
                    <div>
                {u.followed ? <button onClick={() => {
                    props.unfollow(u.id)
                }}>UnFollow</button> : <button onClick={() => {
                    props.follow(u.id)
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
