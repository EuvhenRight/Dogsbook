import {combineReducers, createStore } from 'redux';
import profileReducer from "./profile-Reducer";
import dialogReducer from "./dialogs-Reducer";
import sideBarReducer from "./sidebar-Reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer
});

const store = createStore(reducers);


export default store;
