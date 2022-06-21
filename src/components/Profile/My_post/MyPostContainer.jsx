import React from 'react';
import {addPostActionCreator} from '../../../redux/profile-Reducer';
import MyPost from "./MyPost";
import {connect} from "react-redux";


// const MyPostContainer = (props) => {
//
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };
//
//     let onAddTextArea = (text) => {
//         let action = addTextAreaActionCreator(text);
//         props.store.dispatch(action)
//     };
//
//     return (<MyPost
//         updateNewPostText={onAddTextArea}
//         addPost={addPost}
//         posts={state.profilePage.posts}
//         newPostText={state.profilePage.newPostText}
//     />)
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText: (text) => {
        //     let action = addTextAreaActionCreator(text);
        //     dispatch(action)
        // },
        addPost: (addPost) => {
            dispatch(addPostActionCreator(addPost))
        }

    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;