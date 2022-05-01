import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';




const App = () => {
  return (
    <div className="App-wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
