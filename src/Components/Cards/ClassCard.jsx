import React from 'react'
import './ClassCard.css'

const ClassCard = ({ img, title, data }) => {
  return (
    <div className='cards'>
      <img src={img} alt="background" />
      <div className="intro">
        <h3>{title}</h3>
        <p>{data}</p>  
      </div>
    </div>
  )
}

export default ClassCard