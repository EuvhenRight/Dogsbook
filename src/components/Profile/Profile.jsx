import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import MyPostContainer from "./My_post/MyPostContainer";
import {savePhotoThunk} from "../../redux/profile-Reducer";


const Profile = (props) => {

    return (
        <div className={classes.profile}>

            <ProfileInfo isOwner={props.isOwner}
                         savePhotoThunk={props.savePhotoThunk}
                         profile={props.profile}
                         status={props.status}
                         updateStatusThunk={props.updateStatusThunk}
                         safeProfileThunk={props.safeProfileThunk}/>
            <MyPostContainer profile={props.profile}/>
            
            {/* в пропсах передаємо profile, status, updateStatusThunk*/}
        </div>
    )
}

export default Profile;