import React from 'react';
import My_post from './My_post/My_post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';


const Profile = () => {
    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <My_post />
        </div>
    )
}

export default Profile;