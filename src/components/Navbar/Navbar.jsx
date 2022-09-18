import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './Navbar.css'
import {NavLink} from 'react-router-dom';
import Logo from '../Images/logo.jpg'


const Navbar = () => {
  return (
    <>
<div className='container-fluid nav_bg'>
<div className='row'>
<div className='col-10 mx-auto'>



    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <img src={Logo} alt="Logo" />
    <NavLink className="navbar-brand " to="/">GreenBee
    </NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="products">Products</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="login">Login</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="register">Register</NavLink>
        
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="about">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="contact">Contact</NavLink>
        </li>
        
        
      </ul>
  
    </div>
  </div>
</nav>

</div>
    </div>
</div>


    </>


  )
}

export default Navbar