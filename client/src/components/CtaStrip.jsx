const ADDRESS = 'Chakia Bazaar, Hospital Rd, near Petrol Pump, Chakia, Bihar 845412'
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

function CtaStrip() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cta-strip">
      <div className="cta-strip-inner">
        <h2>Ready to get quality hardware and plumbing in Chakia?</h2>
        <div className="cta-strip-buttons">
          <button type="button" onClick={scrollToContact} className="btn btn-primary">
            Visit us
          </button>
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Get directions
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaStrip
