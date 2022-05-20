import React, { createRef } from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post';


const MyPost = (props) => {

    let postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

    let newAddPost = createRef();

    let onAddPost = () => {
      props.addPost()
    };

    let addTextArea = () => {
        let text = newAddPost.current.value;
        props.updateNewPostText(text)
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
                <button onClick={onAddPost}>Add posts</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div >
    )
}

export default MyPost;