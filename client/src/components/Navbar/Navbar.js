import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">Soy Tofu</Link>

        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">Check-In</Link></li>
        </ul>
      </div>
    </nav>


  )
}

export default Navbar;