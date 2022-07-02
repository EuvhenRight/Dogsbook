import {authApi} from "../components/API/Api";
import {stopSubmit} from "redux-form";

const SET_USER_LOGIN = "dogsbook/auth/SET_USER_LOGIN";


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
                ...state, // стейт який був
                ...action.payload, // додаємо АС, та змінюємо стейт
            };

        default:
            return state;
    }
};

export const setAuthUserLogin = (id, email, login, isAuth) => ({
    type: SET_USER_LOGIN,
    payload: {id, email, login, isAuth} // Добавив, isAuth, для того, щоб була перевірка при логінізації
});


export const authUserThunk = () => async (dispatch) => { // Санка на ініціалізацію юзера
   const response = await authApi.me()
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserLogin(id, email, login, true)); // Диспатч АС
            }
}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => { // Санка на логінізацію на сайті

    const response = await authApi.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(authUserThunk()); //  діспатчим Санку ініціалізаціі юзера
            } else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: messages})) // якщо  довжина массіва > 0 помилок в массів не прийшло
                // пишемо "Some error", як що є визиваємо валідацию {_error: messages}
            }
}

export const logoutThunk = () => async (dispatch) => { //  діспатчим Санку вихода юзера з сайту та обнулямо дані
                                                // (null, null, null, false));
    const response = await authApi.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserLogin(null, null, null, false));
            }
}


export default authReducer;
