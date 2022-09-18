
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Footer from './components/Home/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    
    
    <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='login' element={<Login/>}></Route>
         <Route path='register' element={<Register/>}></Route>
         <Route path='products' element={<Products/>}></Route>
         </Routes>
         
      <Footer/>
         


    </div>
  );
}

export default App;
