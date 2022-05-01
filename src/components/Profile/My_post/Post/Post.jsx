import React from 'react';
import classes from './Post.module.css';



const Post = (props) => {
    return (
        <div className={classes.wall_post}>
            <img src="https://m.media-amazon.com/images/M/MV5BMDU2ZjJmMDEtNWFhYS00OWE3LTk2MTEtNmQ4NjdhY2NhNGExXkEyXkFqcGdeQXVyNDI5MDI0OA@@._V1_FMjpg_UX1000_.jpg" alt="" />
            {props.message}
            <div>
                < span >likes</span > {props.like}
            </div>
        </div >
    )
}

export default Post;