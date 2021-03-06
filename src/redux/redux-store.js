import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from "./profile-Reducer";
import dialogReducer from "./dialogs-Reducer";
import sideBarReducer from "./sidebar-Reducer";
import usersReducer from "./users-Reducer";
import authReducer from "./auth-Reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import AppReducer from "./App-Reducer";
import { composeWithDevTools } from '@redux-devtools/extension';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer, // логінемось ми на сайті
    form: formReducer, // форма для заповненя таблиць
    app: AppReducer // Ініциазіция операцій
});
//
// const newStore = applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
