import React, { useState } from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
// import Home from '../pages/Home'
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen]= useState(false)

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className=" sticky top-0 z-10 bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 shadow-lg">
  {/* Navbar container */}
  <div className="flex justify-between items-center px-6 py-4">
    {/* Logo */}
    <Link to="/home" className="flex items-center space-x-2">
      <img className="w-10" src={Logo} alt="logo" />
      <span className="text-yellow-900 text-2xl font-bold tracking-wide">Restaurant menu</span>
    </Link>

    {/* Desktop menu */}
    <ul className="hidden md:flex items-center space-x-8 text-lg">
      <li>
        <a
          href="/home"
          className="text-white hover:text-yellow-900 font-medium transition duration-300 ease-in-out"
        >
          Home
        </a>
      </li>
    
      <li>
        <a
          href="/about"
          className="text-white hover:text-yellow-900 font-medium transition duration-300 ease-in-out"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/contact"
          className="text-white hover:text-yellow-900 font-medium transition duration-300 ease-in-out"
        >
          Contact
        </a>
      </li>
    </ul>

    {/* Hamburger menu */}
    <button
      onClick={toggleMenu}
      className="md:hidden text-white focus:outline-none text-2xl"
    >
      <i className="fa-solid fa-bars"></i>
    </button>
  </div>

  {/* Mobile menu */}
  {isMenuOpen && (
    <ul className="flex flex-col pl-6 bg-yellow-500 md:hidden text-lg space-y-4 py-4">
      <li>
        <a
          href="/home"
          className="text-white hover:text-yellow-900 font-medium transition duration-300 ease-in-out"
        >
          Home
        </a>
      </li>
      
      <li>
        <a
          href="/about"
          className="text-white hover:text-yellow-900 font-medium transition duration-300 ease-in-out"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/contact"
          className="text-white hover:text-yellow-900 font-medium transition duration-300 ease-in-out"
        >
          Contact
        </a>
      </li>
    </ul>
  )}
</div>

  
  
  )
}

export default NavBar