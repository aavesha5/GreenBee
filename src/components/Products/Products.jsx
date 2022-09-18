import React from 'react'
import ProductsItem from './ProductsItem/ProductsItem.jsx'
import {menuItemsData, VegItemsData} from './Data.js'


import './Products.css'

const Products = () => {
  return (
    <>
    <div className='heading'><h2>Fresh Fruits</h2></div>
    <main>
      
{menuItemsData.map((item)=>(
 <ProductsItem item={item} key={item.id} />
))}

    </main>
    <div className='heading1'><h2>Fresh Vegetables</h2></div>
<div></div>

    <main>
    {VegItemsData.map((item)=>(
 <ProductsItem item={item} key={item.id} />
))}
    </main>
    </>
  )
}

export default Products