import React from 'react';
import { addPostActionCreator, addTextAreaActionCreator } from '../../../redux/profile-Reducer';
import MyPost from "./MyPost";


const MyPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onAddTextArea = (text) => {
        let action = addTextAreaActionCreator(text);
        props.store.dispatch(action)
    };

    return (<MyPost
        updateNewPostText={onAddTextArea}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />)
}

export default MyPostContainer;