const ADDRESS = 'Chakia Bazaar, Hospital Rd, near Petrol Pump, Chakia, Bihar 845412'
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <strong>Prabhu Engineering Hardware</strong>
        <span>© {new Date().getFullYear()}</span>
        <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
          Get directions
        </a>
        <button type="button" onClick={scrollToTop} className="footer-back-top">
          Back to top
        </button>
      </div>
    </footer>
  )
}

export default Footer
