import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import { newPost } from './redux/state';
// import { newPost } from './redux/state';

const App = (props) => {


  return (

    <div className="App-wrapper">
      <Header />
      <Sidebar state={props.state.sideBar} />
      <div className='App-wrapper_dialogs'>
        <Routes>
          <Route path="/dialogs/*"
            element={<Dialogs state={props.state.dialogPage} />} />
          <Route path="/profile"
            element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
