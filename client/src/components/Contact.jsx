const ADDRESS = 'Chakia Bazaar, Hospital Rd, near Petrol Pump, Chakia, Bihar 845412'
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

const whyChooseUs = [
  'Local presence in Chakia Bazaar',
  'Quality hardware and plumbing products',
  'Wide range for construction and repair',
  'Years of trusted service',
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2>Contact us</h2>
        <p className="contact-intro">
          Get in touch for hardware and plumbing. We are here to help.
        </p>
        <div className="contact-grid">
          <div className="contact-block">
            <h3>Our location</h3>
            <p>{ADDRESS}</p>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
              Get directions on Google Maps
            </a>
          </div>
          <div className="contact-block">
            <h3>Call / WhatsApp</h3>
            <p>Visit us for contact number</p>
            <p>Available at the store</p>
          </div>
          <div className="contact-block">
            <h3>Business hours</h3>
            <p>Monday – Saturday: Open</p>
            <p>Sunday: Please call ahead</p>
          </div>
          <div className="contact-block">
            <h3>Why choose us?</h3>
            <ul className="contact-why">
              {whyChooseUs.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
