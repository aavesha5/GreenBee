import React from 'react';
import './Cart.css';
import EmptyCart from './EmptyCart';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FaRupeeSign } from 'react-icons/fa';
import Products from '../Products';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../../redux/cart/cart.selector';

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <>
     
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Products list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total <FaRupeeSign/>{cartTotal}</h3>
        </div>
      )}
    
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);