import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer__container-content">
        <div className="footer__container-addons">
          <div className="item">
            <h3>Diet</h3>
            <div className="line" />
            <p className="uppercase">How to choose food</p>
            <p className="uppercase">Calorie Counting</p>
            <p className="uppercase">How to balance macros</p>
          </div>
          <div className="item">
            <h3>Weight <br /> Training</h3>
            <div className="line" />
            <p className="uppercase">Blogs</p>
            <p className="uppercase">Perfect Form</p>
            <p className="uppercase">Coaches</p>
          </div>
          <div className="item">
            <h3>Exercises</h3>
            <div className="line" />
            <p className="uppercase">How to use <br /> Equipment</p>
          </div>
          <div className="item">
            <h3>Subscribe To <br /> Our Newsletter</h3>
            <div className="line" />
          </div>
        </div>
        <div className="footer__container-info">
          <p>1234 Divi St. #1000 <br /> New York, CA 94720</p>
          <p>+123-456789 <br /> hello@fitness.com</p>
          <p>Copyright &copy; 2023 <br /> All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer