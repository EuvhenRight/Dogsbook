import React from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post';
import PostReduxForm from "./PostForm";


const MyPost = (props) => {

    let postsElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)

    // let newAddPost = createRef(); видалив реф, зараз цим займається PostForm

    let onAddPost = (values) => {
      props.addPost(values.addPostMessage)  // функція котра робить відправку повідомлень за стейта Редакс-Форм,
        // addPostMessage - назва компонента  name={"addPostMessage"} в тексєріі в PostForm
    };


    // let addTextArea = () => {
    //     let text = newAddPost.current.value;
    //     props.updateNewPostText(text)
    // };

    return (
        <div className={classes.my_post}>
            <h2>My Posts</h2>
            <PostReduxForm onSubmit={onAddPost}/>
            {/*<div className={classes.wall_post}> переніс в форму PostReduxForm */}
            {/*    <textarea*/}
            {/*        onChange={addTextArea}*/}
            {/*        ref={newAddPost}*/}
            {/*        value={props.newPostText} />*/}
            {/*</div>*/}
            {/*<div className={classes.wall_post}>*/}
            {/*    <button onClick={onAddPost}>Add posts</button>*/}
            {/*</div>*/}
            <div>
                {postsElement}
            </div>
        </div >
    )
}

export default MyPost;