import {getProfileApi} from "../components/API/Api";
import {setToggleFollowInProgress, unFollowSuccess} from "./users-Reducer";

const NEW_POST = "NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, my famos dog!', likesCount: 100},
        {id: 2, message: 'I love you!', likesCount: 150},
        // { id: 3, message: 'I love you!', likesCount: 150 },
        // { id: 4, message: 'I love you!', likesCount: 150 }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST:
            let newPostmessage = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPostmessage],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: NEW_POST});
export const addTextAreaActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});

export const usersProfileThunk = (userId) => {
    return (dispatch) => {

        // let userId = props.match.params.userId;
        // if (!userId) {
        //     userId = 2;
        // }

        getProfileApi(userId).then(data => {
                dispatch(setUsersProfile(data));
            })
    }
}

export default profileReducer;