import {authApi} from "../components/API/Api";
import {stopSubmit} from "redux-form";

const SET_USER_LOGIN = "SET_USER_LOGIN";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export const setAuthUserLogin = (id, email, login, isAuth) => ({
    type: SET_USER_LOGIN,
    payload: {id, email, login, isAuth} // Добавив, isAuth, для того, щоб була перевірка при логінізації
});


export const authUserThunk = () => (dispatch) => { // Санка на ініціалізацію юзера
    return authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserLogin(id, email, login, true)); // Диспатч АС
            }
        });
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => { // Санка на логінізацію на сайті

    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authUserThunk()); //  діспатчим Санку ініціалізаціі юзера
            } else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: messages})) // якщо  довжина массіва > 0 помилок в массів не прийшло
                // пишимо "Some error", як що є визиваємо валідацию {_error: messages}
            }
        });
}

export const logoutThunk = () => (dispatch) => { //  діспатчим Санку вихода юзера з сайту та обнулямо дані
                                                // (null, null, null, false));

    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserLogin(null, null, null, false));
            }
        });
}


export default authReducer;
