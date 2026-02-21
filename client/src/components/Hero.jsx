import HeroSlider from './HeroSlider'

const ADDRESS = 'Chakia Bazaar, Hospital Rd, near Petrol Pump, Chakia, Bihar 845412'
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

function Hero() {
  return (
    <section id="hero" className="hero">
      <HeroSlider />
      <div className="hero-inner">
        <h1 className="hero-title">Prabhu Engineering Hardware</h1>
        <p className="hero-tagline">Hardware and plumbing solutions in Chakia</p>
        <p className="hero-address">{ADDRESS}</p>
        <div className="hero-cta">
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit us / Get directions
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
