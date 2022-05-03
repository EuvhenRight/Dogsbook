import React from 'react';
import classes from '../ProfileInfo/ProfileInfo.module.css';
import Ava_p from './ava1.jpg';


const ProfileInfo = () => {
    return (
        <div className={classes.profile_info}>
            <div className="main_picture">
                <img src="https://funik.ru/wp-content/uploads/2018/11/a9e0d86d036b40f1ecdc-700x394.jpg"></img>
            </div>
            <div className={classes.avatar_info}>
                <img src={Ava_p}></img>
                <div className={classes.data_user}>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;