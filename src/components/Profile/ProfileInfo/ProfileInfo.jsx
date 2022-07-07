import React from 'react';
import classes from '../ProfileInfo/ProfileInfo.module.css';
import Preloader from "../../general/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus";
import users_photo from "../../../photos/users_photo.png";
import {savePhotoThunk} from "../../../redux/profile-Reducer";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, isOwner, savePhotoThunk, status, updateStatusThunk, safeProfileThunk}) => {

    let [editMode, setActivateEditMode] = useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const onChangePhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhotoThunk(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        safeProfileThunk(formData).then(
            ()=>{
                setActivateEditMode(false);
            }
        );
    }

    return (
        <div className={classes.profile_info}>
            <div className={classes.avatar_info}>
                <img src={profile.photos.large || users_photo} className={classes.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onChangePhotoSelected}/>}
                <div className={classes.profileStatus}>
                    <ProfileStatus className={classes.profileStatus}
                                   status={status}
                                   updateStatusThunk={updateStatusThunk}/>
                </div>

                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : <ProfileData
                    goToEditMode={() => {
                        setActivateEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={classes.profileContact}><b>{contactTitle}</b>: {contactValue}</div>
};


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={classes.profileData}>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Fullname</b>: {profile.fullName}
        </div>
        <div>
            <b>About Me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>LookingForAJob</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}
//
// const ProfileDataForm = ({profile}) => {
//     return <div className={classes.profileData}>
//         <div>
//             <b>Fullname</b>: {profile.fullName}
//         </div>
//         <div>
//             <b>About Me</b>: {profile.aboutMe}
//         </div>
//         <div>
//             <b>LookingForAJob</b>: {profile.lookingForAJob ? "yes" : "no"}
//         </div>
//         {profile.lookingForAJob &&
//             <div>
//                 <b>My professional skills</b>: {profile.LookingForAJobDescription}
//             </div>
//         }
//         <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
//             return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
//         })}
//         </div>
//     </div>
// }

export default ProfileInfo;