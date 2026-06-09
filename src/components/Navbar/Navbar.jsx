import React, { useState } from 'react'
import "./Navbar.css"
import { CircleUserRound } from 'lucide-react';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import MobileLinks from './MobileLinks';
const Navbar = () => {
    const [hamburger, setHamburger] = useState(false)

    const navLinks = [
        {
            id: 1,
            title: "About Us",
            path: "/about",
        },
        {
            id: 2,
            title: "Vehicles",
            path: "/",
        },
        {
            id: 3,
            title: "Technology",
            path: "/technology",
        },
        {
            id: 4,
            title: "Experience",
            path: "/experience",
        },
        {
            id: 5,
            title: "MMC Care",
            path: "/mmc-care",
        },
    ];
    
    return (
        <>
            <nav className='navbar'>
                <a href="/">
                    <img src="https://www.byd.com/static_material/byd/overseas/public-icon/logo.svg" alt="HYD Logo" />
                </a>
                <ul className='links'>
                    {navLinks.map((link) => {
                        return (
                            <li key={link.id}><a href={link.path}>{link.title}</a></li>
                        )
                    })}
                </ul>
                <div className="right">
                    <button> <CircleUserRound strokeWidth={1.2} color='white' />DEALERSHIP APPLICATION</button>
                </div>

                <button className='hamburger-icon' onClick={() => setHamburger(!hamburger)}>
                    {!hamburger ? <Menu /> :

                        <div className="fade">
                            <div className="top-header">
                                <div className="logo"> <a href="/">
                                    <img src="https://www.byd.com/static_material/byd/overseas/public-icon/logo.svg" alt="HYD Logo" />
                                </a></div>
                                <div className='close'>
                                    <X />
                                </div>
                            </div>
                            <div>
                                <MobileLinks />
                                <div className='footer-links'>
                                    <a href="/">MMC</a>
                                </div>
                            </div>
                        </div>
                    }
                </button>

            </nav>
        </>
    )
}

export default Navbar