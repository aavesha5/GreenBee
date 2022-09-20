import React from 'react'
import ProductsItem from './ProductsItem/ProductsItem.jsx'



import './Products.css'

const Products = ({list}) => {
  return (
    <>
    
    <main>
      
{list.map((item)=>(
 <ProductsItem item={item} key={item.id} />
))}

    </main>
 
    </>
  )
}

export default Products