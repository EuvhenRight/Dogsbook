import React from 'react';
import {reduxForm} from "redux-form";
import classes from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../general/FormsControl/FormsControl";
import {required} from "../../general/Validations/Validations";
import {type} from "@testing-library/user-event/dist/type";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.profileData}>
                <div>
                    <button>save</button>
                </div>
                {error &&
                    <div className={classes.error}>
                        {error}
                    </div>
                }
                <div>
                    <b>Fullname</b>: {createField("Full name", "fullName", Input, [])}
                </div>
                <div>
                    <b>About Me</b>: {createField("About me", "aboutMe", Textarea, [])}
                </div>
                <div>
                    <b>Looking ForA Job</b>: {createField(" ", "LookingForAJob",
                    Input, [],
                    {type: "checkbox"})}
                </div>
                <div>
                    <b>My professional skills</b>: {createField(
                    "My professional skills",
                    "lookingForAJobDescription", Textarea, [])}
                </div>

                <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={classes.profileContact}>
                        <b>{key}</b>: {createField(key, "contacts." + key, Input, [])}
                    </div>
                })}
                </div>
            </div>
        </form>
    )
}

const ProfileReduxForm = reduxForm({form: "profile"})(ProfileDataForm);

export default ProfileReduxForm;
