function ProductCard({ name, description, image }) {
  return (
    <article className="product-card card">
      <div className="product-card-image-wrap">
        <img src={image} alt={name} className="product-card-image" />
      </div>
      <h3 className="product-card-title">{name}</h3>
      <p className="product-card-desc">{description}</p>
    </article>
  )
}

export default ProductCard