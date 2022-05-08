import React from 'react';
import My_post from './My_post/My_post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';


const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <My_post
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                newPost={props.newPost} />
        </div>
    )
}

export default Profile;