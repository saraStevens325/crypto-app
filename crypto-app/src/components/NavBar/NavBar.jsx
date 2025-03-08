import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="USD">USD</option>"
                <option value="EUR">USD</option>"
                <option value="INR">USD</option>"
            </select>
            <button>Sign up <img src={arrow_icon} alt="" /></button>
        </div>

    </div>
  )
}

export default NavBar