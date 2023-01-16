import logo from './logo.svg';
import './App.css';
import data from './masterbookData.json'
import {Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import MainScreen from './MainScreen/MainScreen';
import UrduPage from './UrduPage/UrduPage';
import Navbar from './Navbar/Navbar';
import AddNews from './AddNews/AddNews';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/read' element={<MainScreen/>}>
          <Route path='ur' element={<UrduPage/>} />
        </Route>
        <Route path='/admin' element={<AddNews/>} />
      </Routes>
    </div>
  );
}

export default App;
