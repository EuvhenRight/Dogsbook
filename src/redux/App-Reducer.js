import {authUserThunk} from "./auth-Reducer";


const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS";


let initialState = {
    initialize: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialize: true, // змінюємо наш стор на initialize: true
            };

        default:
            return state;
    }
};

export const setInitializedSuccess = () => ({ // АС ініціалізаціі
    type: SET_INITIALIZED_SUCCESS
});


export const initializedAppThunk = () => (dispatch) => { // Санка на ініціалізацію юзера
    let promise = dispatch(authUserThunk());


    Promise.all([promise]).then(() => { //Санка повертає проміс після того як буде проведен   dispatch(authUserThunk());
        dispatch(setInitializedSuccess())
    });

}


export default appReducer;
