import {profileApi} from "../components/API/Api";


const NEW_POST = "dogsbook/profile/NEW-POST"; //  Генерує новий месседж
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"; // Обновляє нове повідомлення // зараз цим займається Redux-Form
const SET_USERS_PROFILE = "dogsbook/profile/SET_USERS_PROFILE"; // Підгружає користувача
const SET_STATUS = "dogsbook/profile/SET_STATUS"; // Наш статус в Профайлі

let initialState = {
    posts: [
        {id: 1, message: 'Hi, my famous dog!', likesCount: 100},
        {id: 2, message: 'I love you!', likesCount: 150},
        // { id: 3, message: 'I love you!', likesCount: 150 },
        // { id: 4, message: 'I love you!', likesCount: 150 }
    ],
    profile: null, // підгрузка користувача
    status: '' // статус, поки він чистий
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST:
            let newPostMessage = {
                id: 6,
                message: action.addPost, // нові повідомлення беремо з акшена addPost, який працює з Redux-Form
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPostMessage],
            };
        // case UPDATE_NEW_POST_TEXT: зараз цим займається Redux-Form
        //     return {
        //         ...state,
        //         newPostText: action.newText,
        //     };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status, // беремо наш стейт ...state(точки відзначають, що це старий стейт(Синтаксис
                // spread часто використовується для поверхневого копіювання об'єктів JS та перезаписуємо в статус - акшн
                // Новий статус
            }
        default:
            return state;
    }
}
// Акшн Креатор - робимо дію зі  статусом,
export const addPostActionCreator = (addPost) => ({type: NEW_POST, addPost});
// export const addTextAreaActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text}); зараз цим займається Redux-Form
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const usersProfileThunk = (userId) => async (dispatch) => {
    let response = await profileApi.getProfileApi(userId)
    dispatch(setUsersProfile(response.data));
};

export const statusThunk = (userId) => async (dispatch) => {
    let response = await profileApi.getStatusApi(userId) // Запрос на сервак по статусу, ми беремо статус по userId та приходить він
    // із setStatus
    dispatch(setStatus(response.data));
};

export const updateStatusThunk = (status) => async (dispatch) => { // беремо вже реальний статус та оновлюємо його
    let response = await profileApi.putUpdateStatusApi(status)
    if (response.data.resultCode === 0) { // якщо що код 0 відповідь з сервера тоді ми показуємо статус
        dispatch(setStatus(status));
    }
};

export default profileReducer;