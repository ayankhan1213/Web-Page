import './Footer.css'

const footerData = [
  {
    heading: 'ABOUT US',
    links: ['ABOUT BYD', 'SAFETY & TECHNOLOGY', 'SUSTAINABILITY'],
  },
  {
    heading: 'VEHICLES',
    links: ['BYD ATTO 2', 'BYD ATTO 3', 'BYD SEAL', 'BYD SEALION 7', 'BYD SHARK 6'],
  },
  {
    heading: 'EXPERIENCE',
    links: ['BYD LOCATIONS', 'BYD CHARGING', 'SAVINGS CALCULATOR', 'STORE', 'CONTACT US'],
  },
]

const socialIcons = {
  facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  youtube: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {footerData.map(col => (
          <div key={col.heading} className="footer-col">
            <h4 className="footer-col-heading">{col.heading}</h4>
            <ul>
              {col.links.map(link => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-brand">
          <div className="footer-logos">
            <span className="footer-byd-logo">BYD</span>
            <div className="footer-mmc-logo">
              <span className="mmc-divider">|</span>
              <div className="mmc-text">
                <span className="mmc-abbr">MMC</span>
              </div>
            </div>
          </div>
          <p className="footer-brand-name">Mega Motor Company</p>
          <p className="footer-brand-name">(Private) Limited</p>

          <div className="footer-socials">
            {Object.entries(socialIcons).map(([name, icon]) => (
              <a key={name} href="#" className="social-link" aria-label={name}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 BYD | Mega Motor Company (Private) Limited. All rights reserved.</p>
      </div>
    </footer>
  )
}
