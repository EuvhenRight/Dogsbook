import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {

    return (
        <div className="App-wrapper">
            <Header/>
            <SidebarContainer store={props.store}/>
            <div className='App-wrapper_dialogs'>
                <Routes>
                    <Route path="/dialogs/"
                           element={<DialogsContainer
                               store={props.store}/>}/>
                    <Route path='/profile/:userId' element={<ProfileContainer store={props.store}/>}/>
                    <Route path='/profile/*' element={<ProfileContainer store={props.store}/>}/>
                    <Route path="/users" element={<UsersContainer store={props.store}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
