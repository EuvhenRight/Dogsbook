import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  { id: 1, message: 'Hi, my famos dog!', likesCount: 100 },
  { id: 2, message: 'I love you!', likesCount: 150 },
  // { id: 3, message: 'I love you!', likesCount: 150 },
  // { id: 4, message: 'I love you!', likesCount: 150 }
]
let dialogs = [
  { id: 1, name: 'Vasya' },
  { id: 2, name: 'Harley' },
  { id: 3, name: 'Mira' },
  { id: 4, name: 'Richi' },
  { id: 5, name: 'Ken' }
]

let messages = [
  { id: 1, message: 'How are you?' },
  { id: 2, message: 'Hi' },
  { id: 3, message: 'You the best!' },
  { id: 4, message: 'Nice' },
  { id: 5, message: 'Beautyfull!' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
