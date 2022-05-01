import React from 'react';
import classes from './My_post.module.css'
import Post from './Post/Post';


const My_post = () => {
    return (
        <div className={classes.My_post}>

            <textarea>Hello EMMA</textarea>
            <button>Add posts</button>

            <div className="wall_post">WALL_POST
                <Post message='Hi my famos dog!' like='100' />
                <Post message='I love you!' like='200' />
            </div>
        </div >
    )
}

export default My_post;