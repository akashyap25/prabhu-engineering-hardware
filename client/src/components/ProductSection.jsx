import ProductCard from './ProductCard'
import { hardwareProducts, plumbingProducts } from '../data/placeholderProducts'

function ProductSection() {
  return (
    <section id="products" className="products">
      <div className="products-inner">
        <div className="section-title">
          <span className="overline">Our products</span>
          <h2>Products we offer</h2>
        </div>

        <div className="products-subsection">
          <h3 className="products-category">Hardware</h3>
          <div className="products-grid">
            {hardwareProducts.map((item) => (
              <ProductCard key={item.id} name={item.name} description={item.description} image={item.image} />
            ))}
          </div>
        </div>

        <div className="products-subsection">
          <h3 className="products-category">Plumbing</h3>
          <div className="products-grid">
            {plumbingProducts.map((item) => (
              <ProductCard key={item.id} name={item.name} description={item.description} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection