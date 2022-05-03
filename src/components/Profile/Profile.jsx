import React from 'react';
import My_post from './My_post/My_post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

// let posts = [
//     { id: 1, message: 'Hi, my famos dog!', likesCount: 100 },
//     { id: 2, message: 'I love you!', likesCount: 150 },
//     // { id: 3, message: 'I love you!', likesCount: 150 },
//     // { id: 4, message: 'I love you!', likesCount: 150 }

// ]

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <My_post posts={props.posts} />
        </div>
    )
}

export default Profile;