import {combineReducers, createStore } from 'redux';
import profileReducer from "./profile-Reducer";
import dialogReducer from "./dialogs-Reducer";
import sideBarReducer from "./sidebar-Reducer";



let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    sideBarReducer: sideBarReducer
});

const store = createStore();


export default store;
