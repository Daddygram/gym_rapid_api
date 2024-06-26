import React from 'react'
import aboutPic from '../../assets/images/about-pic.jpg'
import './About.css'

const About = () => {
  return (
    <div className="about__container" >
      <div className="about__container-content" id="about">
        <div className='about'  id='about'>
          <div className="about__info">
              <div className="about__info-text">
                  <h2>We Will Help You Archieve Your Goals</h2>
                  <h3>Our History</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Laudantium harum consequatur, esse molestiae 
                    voluptas obcaecati cum alias quisquam eius voluptatem 
                    repellendus, blanditiis vero vitae id! Repellendus alias 
                    reiciendis ipsam beatae ullam id dolorem ad iste eaque eveniet 
                    voluptates quasi obcaecati quibusdam deleniti cupiditate itaque 
                    aspernatur, unde numquam a quisquam tempora?</p>
                  <a href='#exercises' className='Btn'>Explore Exercises</a>
              </div>
              <img src={aboutPic} alt="Weights" className='about-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About