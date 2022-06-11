import {combineReducers, createStore} from 'redux';
import profileReducer from "./profile-Reducer";
import dialogReducer from "./dialogs-Reducer";
import sideBarReducer from "./sidebar-Reducer";
import usersReducer from "./users-Reducer";
import authReducer from "./auth-Reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth:authReducer
});

const store = createStore(reducers);


export default store;
