import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
 
const Navbar = () => {
  return (
    <div className='nav'>
        <h2 className='nav-logo'>Your <span>Logo</span></h2>
        <div className='nav-menu'>
            <a href='/#home' className='nav-links'>
                Home
            </a>
            <a href='/#about' className='nav-links'>
                About
            </a>
            <a href='/#classes' className='nav-links'>
                Classes
            </a>
            <a href='/#exercises' className='nav-links'>
                Exercises
            </a>
            <a href='/#pricing' className='nav-links'>
                Pricing
            </a>
            <a href='/#footer' className='nav-links'>
                Contact
            </a>
        </div>
        <button className='Btn'><a href="#contact">Join Now</a></button>
    </div>
  )
}

export default Navbar