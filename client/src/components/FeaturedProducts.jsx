import { hardwareProducts, plumbingProducts } from '../data/placeholderProducts'

const featuredIds = ['hw-2', 'hw-3', 'pl-1', 'pl-4']

function getFeaturedProducts() {
  const all = [...hardwareProducts, ...plumbingProducts]
  return featuredIds.map((id) => all.find((p) => p.id === id)).filter(Boolean)
}

function FeaturedProducts() {
  const products = getFeaturedProducts()

  return (
    <section className="featured-products">
      <div className="featured-products-inner">
        <div className="section-title">
          <span className="overline">Featured</span>
          <h2>Popular products</h2>
        </div>
        <div className="featured-grid">
          {products.map((item) => (
            <article key={item.id} className="featured-card card">
              <div className="featured-card-image-wrap">
                <img src={item.image} alt={item.name} className="featured-card-image" />
              </div>
              <div className="featured-card-body">
                <h3 className="featured-card-title">{item.name}</h3>
                <p className="featured-card-desc">{item.description}</p>
                <a href="#products" className="btn btn-secondary">
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
