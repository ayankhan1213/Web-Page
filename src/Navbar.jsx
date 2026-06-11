import { useState } from 'react'
import './Navbar.css'

const navLinks = ['ABOUT US', 'VEHICLES', 'TECHNOLOGY', 'EXPERIENCE', 'MMC CARE']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
          <text x="0" y="20" fontSize="22" fontWeight="700" fill="white" letterSpacing="2" fontFamily="Inter, sans-serif">BYD</text>
        </svg>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <button className="dealership-btn">DEALERSHIP APPLICATION</button>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
