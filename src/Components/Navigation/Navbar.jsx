import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
 
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-content">
            <a href='/' className='nav-logo'>Your <span>Logo</span></a>
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
                <Link to='/pricing' className='nav-links'>
                    Pricing
                </Link>
                <a href='/#contact' className='nav-links'>
                    Contact
                </a>
            </div>
            <a href='/pricing' className='Btn'>Join Now</a>
        </div>
    </div>
  )
}

export default Navbar