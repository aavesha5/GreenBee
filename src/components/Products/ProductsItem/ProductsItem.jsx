import React from 'react'
import './ProductsItem.css'
import { FaRupeeSign } from 'react-icons/fa';
import ButtonAddRemoveItem from '../ButtonAddRemove/ButtonAddRemoveItem';

const ProductsItem = ({
    item
  }) => {
    const { id, img, name, price, info } = item;
  

  
    return (
      <div className='item'>
        <img src={img} alt='food' />
        <div className='item-head_desc'>
          <p className='head_desc-name'>{name}</p>
          <p className='head_desc-info'>
            <small>{info}</small>
          </p>
        </div>
        <div className='item-foot_desc'>
          <span className='foot_desc-price'><FaRupeeSign/>{price}</span>
          <div>
          </div><ButtonAddRemoveItem quantity={0}/>
      
        </div>
      </div>
    );
  };

  export default ProductsItem
