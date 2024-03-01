import React from 'react'
import Slider from '../Sliders/Slider'
import './Products.style.css'
import productData from '../../api/productData'
function Products() {
  const Data = productData.data
    return (
    <div className='Products'>
    {Data.map((prev)=>{
        return(
            <div className='m-5' key={prev.id}>
            <Slider data={prev} />
            </div>
        )
    })}</div>
  )
}

export default Products