
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
    <Navbar/>
    
    <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='login' element={<Login/>}></Route>
         </Routes>



    </div>
  );
}

export default App;
