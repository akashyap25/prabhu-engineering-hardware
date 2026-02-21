import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import WhatWeDo from './components/WhatWeDo'
import OwnerMessage from './components/OwnerMessage'
import About from './components/About'
import FeaturedProducts from './components/FeaturedProducts'
import CtaStrip from './components/CtaStrip'
import ProductSection from './components/ProductSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <WhatWeDo />
        <OwnerMessage />
        <About />
        <FeaturedProducts />
        <CtaStrip />
        <ProductSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
