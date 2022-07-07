import React, {Suspense} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import HeaderComponent from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedAppThunk} from "./redux/App-Reducer";
import Preloader from "./components/general/Preloader/Preloader";


const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Login = React.lazy(() => import("./components/Login/LoginPage"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

// Щоб ці елементи не підгружались одразу, ми їч обернемо в React.lazy, а при визові ці компоненти обернули в
// <Suspense fallback={<div><Preloader/></div>}>

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
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path="/dialogs/" element={<DialogsContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/profile/*' element={<ProfileContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        initialize: state.app.initialize
    }
);

export default compose(
    connect(mapStateToProps,
        {
            initializedAppThunk
        }
    ))(App);
