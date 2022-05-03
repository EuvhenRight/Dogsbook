import React from 'react';
import classes from './My_post.module.css'
import Post from './Post/Post';


const My_post = (props) => {


    let postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)


    return (
        <div className={classes.my_post}>
            <h2>My Posts</h2>
            <div className={classes.wall_post}>
                <textarea>Hello EMMA</textarea>
            </div>
            <div className={classes.wall_post}>
                <button>Add posts</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div >
    )
}

export default My_post;