import React from 'react'
import "./Hero.css"
import HeroVideo from '../../assets/hero-video.mp4'
import Button from './Button'
const Hero = () => {
  return (
    <>
      <div className="video-section">
        <video autoPlay muted loop src={HeroVideo}></video>
      </div>

      <div className="hero-bottom">
        <div className="heroRightPart">
          <h2>World’s no.1 NEV brand*</h2>
          <p>*Based on the publicly available sources</p>
        </div>

        <div className="heroLeftPart">
            <div className="duo">
              <Button text="Express your Interest" />
              <Button text="Book a test Drive" />
            </div>
            <Button text="Book now" />
        </div>
      </div>
    </>
  )
}

export default Hero