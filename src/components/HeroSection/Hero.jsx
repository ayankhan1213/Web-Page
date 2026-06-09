import React from 'react'
import "./Hero.css"
import HeroVideo from '../../assets/hero-video.mp4'
const Hero = () => {
  return (
    <>
        <div className="video-section">
            <video autoPlay muted loop src={HeroVideo}></video>
        </div>
    </>
  )
}

export default Hero