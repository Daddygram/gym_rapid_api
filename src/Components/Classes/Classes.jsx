import React from 'react'
import './Classes.css'
import ClassCard from '../Cards/ClassCard'
import bodyBuilding from '../../assets/images/bodybuilding.jpg'
import powerLifting from '../../assets/images/powerlifting.jpg'
import cardio from '../../assets/images/cardio.jpg'
import yoga from '../../assets/images/yoga.jpg'
import boxing from '../../assets/images/boxing.jpg'
import bjj from '../../assets/images/bjj.jpg'

const Classes = () => {
  return (
    <div className='class__container'>
      <h2>Classes</h2>
      <div className="card__box">
        <div className="card__box-content">
          <ClassCard title="BodyBuilding" img={bodyBuilding}
          data="Wednesday: 9:00am-10:00am" />
          <ClassCard title="PowerLifting" img={powerLifting}
          data="Friday: 10:00am-11:00am" />
          <ClassCard title="Cardio" img={cardio}
          data="Saturday: 9:00am-10:00am" />
          <ClassCard title="Yoga" img={yoga}
          data="Tuesday: 1:00pm-2:00pm" />
          <ClassCard title="Boxing" img={boxing}
          data="Sunday: 6:00pm-7:00pm" />
          <ClassCard title="Brazilian Jiu-Jitsu" img={bjj}
          data="Monday: 4:00pm-5:00pm" />
        </div>
      </div>
    </div>
  )
}

export default Classes