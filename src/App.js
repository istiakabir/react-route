import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Error from './components/Error/Error';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <Header></Header>

     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/friends' element={<Friends/>}></Route>
       <Route path='/friend/:friendId' element={<FriendDetails/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='*' element={<Error/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
