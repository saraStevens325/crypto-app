import React, { useContext } from 'react'
import './NavBar.css'
import { CoinContext } from '../../context/CoinContext'
import navbarLogo from '../../assets/navbar-logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const {setCurrency} = useContext(CoinContext);

  const handleCurrency = (e) => {
    switch (e.target.value) {
        case "usd":
            setCurrency({name: "usd", symbol: "$"});
            break;
        case "eur":
            setCurrency({name: "eur", symbol: "€"});
            break;
        case "inr":
            setCurrency({name: "inr", symbol: "₹"});
            break;
        default:
            setCurrency({name: "usd", symbol: "$"});
            break;
    }
  }
  return (
    <div className='navbar'>
        <Link to={`/`}><img src={navbarLogo} className="navbar-logo" /></Link>
        
        
        <ul>
            <Link to={`/`}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={handleCurrency}>
                <option value="usd">USD</option>"
                <option value="eur">EUR</option>"
                <option value="inr">INR</option>"
            </select>
            
        </div>

    </div>
  )
}

export default NavBar