import React from 'react'
import { Plus } from 'lucide-react';
import "./Navbar.css"
const MobileLinks = () => {
  const mobileLinks = [
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
    }
  ]
  return (
    <div className='mob-links'>
      {mobileLinks.map((single) => {
        return (
          <div className='singleLine'>
            <div><a href="/">{single.title}</a></div>
            <div><Plus /></div>
          </div>
        )
      })}
    </div>
  )
}

export default MobileLinks