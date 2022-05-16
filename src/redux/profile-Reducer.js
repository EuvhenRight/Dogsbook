const NEW_POST = "NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action)=> {
    switch (action.type) {
        case NEW_POST:
            let newPostmessage = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
                state.posts.push(newPostmessage);
                state.newPostText = '';
                return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    };
}

export const addPostActionCreator = () => ({ type: NEW_POST });
export const addTextAreaActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;