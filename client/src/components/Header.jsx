function Header() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="header-inner">
        <span className="header-logo">Prabhu Engineering Hardware</span>
        <nav className="header-nav">
          <button type="button" onClick={() => scrollTo('hero')}>
            Home
          </button>
          <button type="button" onClick={() => scrollTo('products')}>
            Products
          </button>
          <button type="button" onClick={() => scrollTo('contact')}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
