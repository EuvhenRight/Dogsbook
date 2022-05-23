const NEW_POST = "NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: 'Hi, my famos dog!', likesCount: 100 },
        { id: 2, message: 'I love you!', likesCount: 150 },
        // { id: 3, message: 'I love you!', likesCount: 150 },
        // { id: 4, message: 'I love you!', likesCount: 150 }
    ],
    newPostText: ''
};

const profileReducer = (state= initialState, action)=> {
    switch (action.type) {
        case NEW_POST:
            let newPostmessage = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPostmessage ],
                newPostText: ''
        };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: NEW_POST });
export const addTextAreaActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;