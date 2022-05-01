import React from 'react';
import My_post from './My_post/My_post';
import classes from './Profile.module.css'


const Profile = () => {
    return (
        <div className={classes.profile}>
            <div className="main_picture">
                <img src="https://funik.ru/wp-content/uploads/2018/11/a9e0d86d036b40f1ecdc-700x394.jpg"></img>
            </div>
            <div className={classes.avatar}>
                <img src="https://m.media-amazon.com/images/M/MV5BMDU2ZjJmMDEtNWFhYS00OWE3LTk2MTEtNmQ4NjdhY2NhNGExXkEyXkFqcGdeQXVyNDI5MDI0OA@@._V1_FMjpg_UX1000_.jpg"></img>
                <div className="data_user">DATA_USER</div>
                <My_post />
            </div>
        </div>
    )
}

export default Profile;