import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { newPost, subscriber, updateNewPostText, DialogMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let EnterNewState = (state) => {

    root.render(
        <BrowserRouter>
            <App
                Appstate={state}
                newPost={newPost}
                updateNewPostText={updateNewPostText}
                DialogMessage={DialogMessage}
            />
        </BrowserRouter>
    );
}
EnterNewState(state);

subscriber(EnterNewState);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

