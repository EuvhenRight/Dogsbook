import React from 'react';
import classes from './Post.module.css';
import Ava_p from './ava1.jpg'



const Post = (props) => {
    return (
        <div className={classes.wall_post}>
            <img src={Ava_p} alt="" />
            {props.message}
            <div>
                <span >likes</span > {props.like}
            </div>
        </div >
    )
}

export default Post;