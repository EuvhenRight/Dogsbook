import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import MyPostContainer from "./My_post/MyPostContainer";


const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;