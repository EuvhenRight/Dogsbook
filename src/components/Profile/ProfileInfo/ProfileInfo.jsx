import React from 'react';
import classes from '../ProfileInfo/ProfileInfo.module.css';
import Preloader from "../../general/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div proclassName={classes.profile_info}>
            <div>
                <img src="https://funik.ru/wp-content/uploads/2018/11/a9e0d86d036b40f1ecdc-700x394.jpg"/>
            </div>
            <div className={classes.avatar_info}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={"Hello"}/>
                <h3>{props.profile.fullName}</h3>
                <div>About Me:
                    <span>{props.profile.aboutMe}</span>
                </div>
                <div>Contacs:
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.github}</div>
                </div>
                <div>Work:
                <div>{props.profile.lookingForAJob === false
                    ? props.profile.lookingForAJob : props.profile.lookingForAJobDescription}</div>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;