import React from 'react';


const Profile = () => {
    return (
        <div className="profile">
            <div className="main_picture">
                <img src="https://ak.picdn.net/shutterstock/videos/3635480/thumb/1.jpg"></img>
            </div>
            <div className="avatar">
                <img src="https://m.media-amazon.com/images/M/MV5BMDU2ZjJmMDEtNWFhYS00OWE3LTk2MTEtNmQ4NjdhY2NhNGExXkEyXkFqcGdeQXVyNDI5MDI0OA@@._V1_FMjpg_UX1000_.jpg"></img>
                <div className="data_user">DATA_USER</div>
                <div className="post_user">
                    <div>MY_POST</div>
                    <div>NEW_POST</div>
                </div>
                <div className="wall_post">WALL_POST
                    <div>POST1</div>
                    <div>POST2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;