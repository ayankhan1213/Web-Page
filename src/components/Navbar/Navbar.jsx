import React from 'react'
import "./Navbar.css"
import { CircleUserRound } from 'lucide-react';
import { Menu } from 'lucide-react';
const Navbar = () => {
    const navLinks = [
        {
            id: 1,
            title: "About Us",
            path: "/about",
        },
        {
            id: 2,
            title: "Home",
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

                <div className="mobile-icon">
                    <button><Menu strokeWidth={1.6} /></button>
                </div>
            </nav>
        </>
    )
}

export default Navbar