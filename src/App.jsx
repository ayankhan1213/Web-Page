import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import { CircleUserRound } from 'lucide-react';
const App = () => {
  return (
    <div>
      <Hero />
      <Navbar />
    </div>
  )
}

export default App