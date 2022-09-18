import React from 'react'
import './Home.css'
import hero from '../Images/hero1.png'
import {NavLink} from 'react-router-dom';



const Home = () => {
  return (
    <>
  <section id="header" className="d-flex align-items-center">
  <div className='container-fluid nav_bg'>
<div className='row'>
<div className='col-10 mx-auto'>
<div className='row'>
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<h1>The Fastest Delivery in <strong className="brand-name">Your City</strong></h1>
<h3 className="my-3">Fresh veggies availaible at one click !</h3>
<div className="mt-3">
  <NavLink to="products" className="btn-get-started">Order Now</NavLink>
</div>
</div>

<div className="col-lg-6 order-1 order-lg-2 header-image">
  <img src={hero} className="img-fluid animated" alt="home-image"/>
</div>
</div>
</div>
</div>
    </div>
  </section>
  

    </>
  )
}

export default Home