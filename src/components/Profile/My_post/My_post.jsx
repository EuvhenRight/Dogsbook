import React, { createRef } from 'react';
import { updateNewPostText, newPost, newPostText } from '../../../redux/state';
import classes from './My_post.module.css'
import Post from './Post/Post';


const My_post = (props) => {

    // debugger;
    let postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

    let newAddPost = createRef();

    let addPost = () => {
        let text = newAddPost.current.value;
        props.newPost(text);
        newAddPost.current.value = '';
    };

    let addTextArea = () => {
        let text = newAddPost.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.my_post}>
            <h2>My Posts</h2>
            <div className={classes.wall_post}>
                <textarea
                    onChange={addTextArea}
                    ref={newAddPost}
                    value={props.newPostText} />
            </div>
            <div className={classes.wall_post}>
                <button onClick={addPost}>Add posts</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div >
    )
}

export default My_post;