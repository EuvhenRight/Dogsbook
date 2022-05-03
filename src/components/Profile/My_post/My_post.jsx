import React from 'react';
import classes from './My_post.module.css'
import Post from './Post/Post';


const My_post = () => {
    return (
        <div className={classes.my_post}>
            <div className={classes.wall_post}>
                <textarea>Hello EMMA</textarea>
            </div>
            <div className={classes.wall_post}>
                <button>Add posts</button>
            </div>
            <div>
                <Post message='Hi my famos dog!' like='100' />
                <Post message='I love you!' like='200' />
            </div>
        </div >
    )
}

export default My_post;