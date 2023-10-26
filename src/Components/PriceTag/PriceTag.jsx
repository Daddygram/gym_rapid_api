import React from 'react'
import './PriceTag.css'

const PriceTag = ({ img, title, price, content }) => {
  return (
    <div className='cards price-cards'>
        <img src={img} alt=" " className='price-img' />
        <div className="intro">
            <h3>{title}</h3>
            <p>$ {price} per/month</p>
        </div>
        
    </div>
  )
}

export default PriceTag