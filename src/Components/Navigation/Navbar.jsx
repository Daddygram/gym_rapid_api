import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
 
const Navbar = () => {
  return (
    <div className='nav'>
        <h2 className='nav-logo'>Your <span>Logo</span></h2>
        <div className='nav-menu'>
            <Link to='/#home' className='nav-links'>
                Home
            </Link>
            <Link to='/#about' className='nav-links'>
                About
            </Link>
            <Link to='/#classes' className='nav-links'>
                Classes
            </Link>
            <Link to='/#exercises' className='nav-links'>
                Exercises
            </Link>
            <Link to='/#gallery' className='nav-links'>
                Gallery
            </Link>
            <Link to='/#contact' className='nav-links'>
                Contact
            </Link>
        </div>
        <button className='Btn'><a href="#contact">Join Now</a></button>
    </div>
  )
}

export default Navbar