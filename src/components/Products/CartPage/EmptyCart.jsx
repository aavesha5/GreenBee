
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './EmptyCart.css'
import emptycart from '../../Images/emptycart.png'

const EmptyCart = () => {
    const navigate=useNavigate();
  return (
    <div className='emptyCart'>
         <img src={emptycart} alt='emptycart' />
         <h5>Cart is Empty.</h5>
      <button onClick={() => navigate('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
        </div>
  )
}

export default EmptyCart