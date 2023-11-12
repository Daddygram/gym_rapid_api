import React from 'react'
import './Classes.css'
import ClassCard from '../Cards/ClassCard'
import bodyBuilding from '../../assets/images/bodybuilding3.jpg'
import powerLifting from '../../assets/images/powerlifting2.jpg'
import cardio from '../../assets/images/cardio2.jpg'
import yoga from '../../assets/images/yoga2.jpg'
import boxing from '../../assets/images/boxing2.jpg'
import bjj from '../../assets/images/bjj2.jpg'

const Classes = () => {
  return (
    <div className='class__container' id='classes'>
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