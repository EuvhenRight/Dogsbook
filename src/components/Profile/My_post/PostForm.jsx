import React from 'react';
import classes from './MyPost.module.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../general/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../general/Validations/Validations";


const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {

    // let addEnterPost = (e) =>{
    //     if(e.key === "Enter") {
    //         props.handleSubmit()
    //     }
    // }

    return (
        <form onSubmit={ props.handleSubmit}>
            <div className={classes.wall_post}>
                <Field
                    component={Textarea}
                    name={"addPostMessage"}
                    placeholder={"enter message"}
                    validate={[required, maxLength10]}
                    // onKeyPress={addEnterPost}
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