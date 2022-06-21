import React from 'react';
import classes from './MyPost.module.css'
import {Field, reduxForm} from "redux-form";


const PostForm = (props) => {

    let addEnterPost = (e) =>{
        if(e.key === "Enter") {
            props.handleSubmit()
        }
    }

    return (
        <form onSubmit={addEnterPost}>
            <div className={classes.wall_post}>
                <Field
                    component={"textarea"}
                    name={"addPostMessage"}
                    placeholder={"enter message"}
                    onKeyPress={addEnterPost}
                   />
            </div>
            <div className={classes.wall_post}>
                <button>Add posts</button>
            </div>
        </form>
    )
};

const PostReduxForm = reduxForm(
    {
        form: "newAddPost"
    }
)(PostForm);


export default PostReduxForm;