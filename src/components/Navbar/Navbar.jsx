import React, { useState } from 'react'
import "./Navbar.css"
import { CircleUserRound } from 'lucide-react';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Plus } from 'lucide-react';
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
                            <div className='mob-links'>
                                <ul>
                                    <div>
                                        <li><a href="/">About Us</a></li>
                                        <li><Plus /></li>
                                    </div>

                                    <div>
                                        <li><a href="/">Vehicels</a></li>
                                        <li><Plus /></li>
                                    </div>

                                    <div>
                                        <li><a href="/">Technologies</a></li>
                                        <li><Plus /></li>
                                    </div>

                                    <div>
                                        <li><a href="/">Experience</a></li>
                                        <li><Plus /></li>
                                    </div>

                                    <div>
                                        <li><a href="/">MMC Care</a></li>
                                    </div>

                                    <div className='user-icon'>
                                        <li>
                                            <a href="/">
                                                <CircleUserRound /> Login
                                            </a>
                                        </li>
                                    </div>

                                    <div>
                                        <li><a href="/">Dealership Application</a></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    }
                </button>

            </nav>
        </>
    )
}

export default Navbar