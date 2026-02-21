import { useState, useEffect } from 'react'
import { heroSliderImages } from '../data/heroSliderImages'

const INTERVAL_MS = 5000

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % heroSliderImages.length)
    }, INTERVAL_MS)
    return () => clearInterval(t)
  }, [])

  const goTo = (index) => setCurrentIndex(index)
  const prev = () => setCurrentIndex((i) => (i - 1 + heroSliderImages.length) % heroSliderImages.length)
  const next = () => setCurrentIndex((i) => (i + 1) % heroSliderImages.length)

  if (!heroSliderImages.length) return null

  return (
    <div className="hero-slider">
      <div
        className="hero-slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroSliderImages.map((img, i) => (
          <div key={i} className="hero-slider-slide">
            <img
              src={img.src}
              alt={img.alt}
              className="hero-slider-img"
              onError={(e) => {
                if (img.fallback && e.target.src !== img.fallback) {
                  e.target.onerror = null
                  e.target.src = img.fallback
                }
              }}
            />
            <div className="hero-slider-overlay" aria-hidden />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="hero-slider-btn hero-slider-btn-prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        className="hero-slider-btn hero-slider-btn-next"
        onClick={next}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      <div className="hero-slider-dots" role="tablist" aria-label="Slide navigation">
        {heroSliderImages.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Slide ${i + 1}`}
            className={`hero-slider-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
