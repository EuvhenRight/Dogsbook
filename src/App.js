import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';



const App = () => {
  return (
    <div className="App-wrapper">
      <Header />
      <Sidebar />
      <div className='App-wrapper_dialogs'>
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
