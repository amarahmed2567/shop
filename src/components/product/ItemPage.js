import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ItemPage.css'
import Size from './Size'
import productData from '../../api/productData'
function Product() {
    const Data = productData.data
    const {id} = useParams()
    const item = Data.find((prev)=>prev.id == id)
    return (
      <section className='product'>
          <div className='product-imgs'>
            {/* <Link to='/' className='back-icon'>
            <IoMdArrowRoundBack ></IoMdArrowRoundBack>
            </Link> */}
            <img src={item.image} alt={item.title}/>
          </div>
          <div className='product-info'>
            <h1 className='product-title'>{item.title}</h1>
            <p className='product-direction'>{item.direction}</p>
            <div className='product-siz'>
              <div className='product-text-header'>size</div>
                <Size sizeData={item.size}/>
            </div>
            <div className='product-price'>
                <span className='itme-price'>{item.price} egp</span>
                <span className='itme-price-offer'>150 egp</span>
              </div>
            <div className='btn-car'>
            <button className='Button item-add-car' onClick={()=>{}}>add to cart</button>
            <button className='Button item-add-favourite' onClick={()=>{}}>add to favourite</button>
            </div>
        
          </div>
      </section>
      )
}

export default Product