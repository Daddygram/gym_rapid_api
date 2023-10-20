import React from 'react'
import './Classes.css'
import ClassCard from '../../Components/Cards/ClassCard'
import bodyBuilding from '../../assets/images/bodybuilding.jpg'

const Classes = () => {
  return (
    <div className='class__container'>
      <ClassCard title="BodyBuilding" img={bodyBuilding} />
    </div>
  )
}

export default Classes