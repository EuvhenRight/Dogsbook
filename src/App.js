import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderContainer";
import Login from "./components/Login/LoginPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedAppThunk} from "./redux/App-Reducer";
import Preloader from "./components/general/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializedAppThunk();
    }

    render() {

        if (!this.props.initialize) {
            return <Preloader/>
        }

        return (
            <div className="App-wrapper">
                <HeaderComponent/>
                <SidebarContainer/>
                <div className='App-wrapper_dialogs'>
                    <Routes>
                        <Route path="/dialogs/"
                               element={<DialogsContainer/>}/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialize: state.app.initialize
});

export default compose(
    connect(mapStateToProps, {initializedAppThunk}))(App);
