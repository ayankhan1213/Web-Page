import { useState, useEffect } from 'react'
import './Hero.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1920&q=80',
    headline: "WORLD'S NO.1 NEV BRAND*",
    sub: '*Based on the publicly available sources',
    buttons: ['EXPRESS YOUR INTEREST', 'BOOK A TEST DRIVE', 'BOOK NOW'],
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    headline: 'DRIVE ELECTRIC, DRIVE SMART',
    sub: 'The future of mobility is here',
    buttons: ['CALCULATE SAVINGS WITH BYD'],
  },
  {
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80',
    headline: 'BUILT FOR EVERY ROAD',
    sub: 'Adventure-ready, zero emissions',
    buttons: ['EXPLORE MODELS', 'BOOK A TEST DRIVE'],
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">{slide.headline}</h1>
          <p className="hero-sub">{slide.sub}</p>
        </div>

        <div className="hero-actions">
          {slide.buttons.map(btn => (
            <button key={btn} className="hero-btn">{btn}</button>
          ))}
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
