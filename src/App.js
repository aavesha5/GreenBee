
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Footer from './components/Home/Footer';
import Cart from './components/Products/CartPage/Cart';
import About from './components/About/About';
import ContactForm from './components/Contact/ContactForm';
import Error from './components/ErrorPage/Error';
import {menuItemsData} from './components/Products/Data'

/* 
npm i bootstrap 
npm i react-bootstrap 
npm i react-router-dom
npm i swiper 
npm i redux redux-persist react-redux
npm i reselect
*/

function App() {
  
  
  return (
    <div className="App">
    <Navbar/>
    
    
    <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='login' element={<Login/>}></Route>
         <Route path='register' element={<Register/>}></Route>
         <Route path='products' element={<Products list={menuItemsData}/>}></Route>
         <Route path='about' element={<About/>}></Route>
         <Route path='contact' element={<ContactForm/>}></Route>
         <Route path='cart' element={<Cart/>}></Route>
         <Route path='*' element={<Error/>}></Route>
         </Routes>
         
      <Footer/>
         


    </div>
  );
}

export default App;
