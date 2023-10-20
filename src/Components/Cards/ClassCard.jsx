import React from 'react'
import './ClassCard.css'

const ClassCard = ({ img, title }) => {
  return (
    <div className='card__box'>
        <div className='card'>
            <img src={img} alt="background" />
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default ClassCard