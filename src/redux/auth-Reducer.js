import {getAuthApi} from "../components/API/Api";

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
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
};

export const setAuthUserLogin = (id, email, login) => ({type: SET_USER_LOGIN, data: {id, email, login}});


export const authUserThunk = () => {
    return (dispatch) => {

        getAuthApi().then(data => {

            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserLogin(id, email, login));
            }
        });

    }
}

export default authReducer;