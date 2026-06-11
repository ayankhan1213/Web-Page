import { useState } from 'react'
import './Vehicles.css'

const vehicles = [
  {
    name: 'BYD ATTO 2',
    tagline: 'The SMART Choice',
    desc: 'Smart features, smooth rides, and electric vibes for the new generation. Designed for modern lifestyles, the BYD ATTO 2 blends intelligent technology with everyday comfort.',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=900&q=80',
  },
  {
    name: 'BYD ATTO 3',
    tagline: 'Electric Freedom',
    desc: 'A bold new direction in electric SUVs. The ATTO 3 delivers an uncompromising blend of range, performance, and interior space for families on the go.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=80',
  },
  {
    name: 'BYD SEAL',
    tagline: 'Born to Perform',
    desc: 'Precision-engineered for those who demand more. The SEAL combines sports sedan dynamics with groundbreaking electric efficiency in a sleek, aerodynamic body.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80',
  },
  {
    name: 'BYD SEALION 7',
    tagline: 'Command the Road',
    desc: 'The premium electric SUV that redefines what a family vehicle can be. With over 500km range and a luxurious interior, the SEALION 7 sets a new benchmark.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=80',
  },
  {
    name: 'BYD SHARK 6',
    tagline: 'Dominate Every Terrain',
    desc: 'The world\'s first plug-in hybrid pickup truck built for those who refuse to compromise. Raw power meets electric efficiency in the most capable SHARK yet.',
    image: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-atto-2%2Fatto-2-home-tab.webp&w=1920&q=75',
  },
]

export default function Vehicles() {
  const [active, setActive] = useState(0)
  const vehicle = vehicles[active]

  return (
    <section className="vehicles">
      <div className="vehicles-header">
        <p className="vehicles-eyebrow">Explore the latest generation of New Energy Vehicles by BYD</p>
        <div className="vehicles-tabs">
          {vehicles.map((v, i) => (
            <button
              key={v.name}
              className={`vehicle-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {v.name}
            </button>
          ))}
        </div>
      </div>

      <div className="vehicles-showcase">
        <div className="vehicles-image-wrap">
          <img src={vehicle.image} alt={vehicle.name} className="vehicles-img" />
        </div>
        <div className="vehicles-info">
          <h2 className="vehicles-tagline">{vehicle.tagline}</h2>
          <p className="vehicles-desc">{vehicle.desc}</p>
          <button className="vehicles-cta">VIEW DETAILS</button>
        </div>
      </div>
    </section>
  )
}
